export const prerender = false;
import type { APIRoute } from "astro";

// Configuración del backend
const BACKEND_API_URL = 'http://localhost:3000/api';

// Interfaces
interface CreateCrimeRequest {
  user_id: string;
  officer_id: string;
  penal_code_id: number;
  notes?: string;
}

interface DeleteCrimeRequest {
  penal_code_id: number;
}

// Helper function para hacer requests al backend
async function backendRequest(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();
    
    return {
      ok: response.ok,
      status: response.status,
      data,
    };
  } catch (error) {
    console.error('Error en request al backend:', error);
    return {
      ok: false,
      status: 500,
      data: { success: false, message: 'Error de conectividad con el backend' },
    };
  }
}

// GET: Obtener todos los crímenes de un ciudadano
export const GET: APIRoute = async ({ params }) => {
  const { id } = params;

  if (!id) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'ID de ciudadano requerido' 
      }), 
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const result = await backendRequest(`/user-offenses/${id}`);
    
    if (!result.ok) {
      return new Response(
        JSON.stringify(result.data), 
        { 
          status: result.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Transformar los datos del backend al formato esperado por el frontend
    const transformedCrimes = result.data.data.map((offense: any) => {
      const date = new Date(offense.date_time);
      
      return {
        reason: offense.crime_name,
        date: date.toISOString().split('T')[0], // YYYY-MM-DD
        hour: date.toTimeString().split(' ')[0].slice(0, 5), // HH:MM
        details: offense.notes || offense.crime_description,
        conviction: `${offense.prison} meses de prisión`,
        fine: `${offense.fine} CLP`,
        // Datos adicionales para el frontend
        penal_code_id: offense.penal_code_id,
        officer_info: {
          name: `${offense.officer_firstname} ${offense.officer_lastname}`,
          badge: offense.officer_badge
        }
      };
    });

    return new Response(
      JSON.stringify({
        success: true,
        data: transformedCrimes,
        count: transformedCrimes.length
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error obteniendo crímenes:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error interno del servidor',
        error: error instanceof Error ? error.message : 'Unknown error'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// POST: Crear un nuevo crimen para un ciudadano
export const POST: APIRoute = async ({ params, request }) => {
  const { id } = params;

  if (!id) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'ID de ciudadano requerido' 
      }), 
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.officer_id || !body.penal_code_id) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Campos requeridos: officer_id, penal_code_id' 
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Preparar datos para el backend
    const crimeData: CreateCrimeRequest = {
      user_id: id,
      officer_id: body.officer_id,
      penal_code_id: body.penal_code_id,
      notes: body.notes
    };

    const result = await backendRequest('/user-offenses', {
      method: 'POST',
      body: JSON.stringify(crimeData),
    });

    if (!result.ok) {
      return new Response(
        JSON.stringify(result.data), 
        { 
          status: result.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Transformar la respuesta del backend
    const offense = result.data.data;
    const date = new Date(offense.date_time);
    
    const transformedCrime = {
      reason: offense.crime_name,
      date: date.toISOString().split('T')[0],
      hour: date.toTimeString().split(' ')[0].slice(0, 5),
      details: offense.notes || offense.crime_description,
      conviction: `${offense.prison} meses de prisión`,
      fine: `${offense.fine} CLP`,
      penal_code_id: offense.penal_code_id,
      officer_info: {
        name: `${offense.officer_firstname} ${offense.officer_lastname}`,
        badge: offense.officer_badge
      }
    };

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Crimen registrado exitosamente',
        data: transformedCrime
      }), 
      { 
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error creando crimen:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error interno del servidor',
        error: error instanceof Error ? error.message : 'Unknown error'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// DELETE: Eliminar un crimen específico
export const DELETE: APIRoute = async ({ params, request }) => {
  const { id } = params;

  if (!id) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'ID de ciudadano requerido' 
      }), 
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const body = await request.json() as DeleteCrimeRequest;
    
    if (!body.penal_code_id) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'penal_code_id requerido' 
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const result = await backendRequest(`/user-offenses/${id}/${body.penal_code_id}`, {
      method: 'DELETE',
    });

    if (!result.ok) {
      return new Response(
        JSON.stringify(result.data), 
        { 
          status: result.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Crimen eliminado exitosamente'
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error eliminando crimen:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error interno del servidor',
        error: error instanceof Error ? error.message : 'Unknown error'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};