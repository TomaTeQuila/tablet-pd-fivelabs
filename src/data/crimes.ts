// Configuración del API
const API_BASE_URL = 'http://localhost:3000/api';

// Interfaces
export interface Crime {
  name: string;
  date: string;
  hour: string;
  details: string;
  conviction: string;
  fine: string;
}

export interface UserOffense {
  user_id: string;
  officer_id: string;
  penal_code_id: number;
  date_time: string;
  notes: string | null;
  name: string;
  crime_description: string;
  fine: number;
  prison: number;
  officer_firstname: string;
  officer_lastname: string;
  officer_badge: string;
}

export interface CreateCrimeRequest {
  user_id: string;
  officer_id: string;
  penal_code_id: number;
  notes?: string;
}

// Función para transformar UserOffense del API al formato Crime del frontend
function transformUserOffenseToCrime(offense: UserOffense): Crime {
  const date = new Date(offense.date_time);
  
  return {
    name: offense.name,
    date: date.toISOString().split('T')[0], // Formato YYYY-MM-DD
    hour: date.toTimeString().split(' ')[0].slice(0, 5), // Formato HH:MM
    details: offense.notes || offense.crime_description,
    conviction: `${offense.prison} meses de prisión`,
    fine: `${offense.fine} CLP`
  };
}

// Función para obtener crímenes de un usuario específico
export async function getCrimesForUser(userId: string): Promise<Crime[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/user-offenses/${userId}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        // Usuario no encontrado o sin crímenes
        return [];
      }
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.success || !Array.isArray(data.data)) {
      console.warn('Formato de respuesta inesperado:', data);
      return [];
    }
    
    return data.data.map(transformUserOffenseToCrime);
    
  } catch (error) {
    console.error(`Error obteniendo crímenes para usuario ${userId}:`, error);
    return [];
  }
}

// Función para obtener todos los crímenes (simulando el comportamiento original)
export async function getAllCrimes(): Promise<Record<string, Crime[]>> {
  try {
    // Primero obtenemos todos los usuarios
    const usersResponse = await fetch(`${API_BASE_URL}/users`);
    
    if (!usersResponse.ok) {
      throw new Error('No se pudieron obtener los usuarios');
    }
    
    const usersData = await usersResponse.json();
    const crimes: Record<string, Crime[]> = {};
    
    // Para cada usuario, obtenemos sus crímenes
    for (const user of usersData.data) {
      const userCrimes = await getCrimesForUser(user.identifier);
      if (userCrimes.length > 0) {
        crimes[user.identifier] = userCrimes;
      }
    }
    
    return crimes;
    
  } catch (error) {
    console.error('Error obteniendo todos los crímenes:', error);
    return {};
  }
}

// Función para crear un nuevo crimen
export async function createCrime(crimeData: CreateCrimeRequest): Promise<UserOffense | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/user-offenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(crimeData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.data) {
      return data.data as UserOffense;
    }
    
    throw new Error('Respuesta del servidor no válida');
    
  } catch (error) {
    console.error('Error creando crimen:', error);
    throw error;
  }
}

// Función para eliminar un crimen
export async function deleteCrime(userId: string, penalCodeId: number): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/user-offenses/${userId}/${penalCodeId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.success === true;
    
  } catch (error) {
    console.error('Error eliminando crimen:', error);
    return false;
  }
}

// Función helper para verificar la conectividad del API
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('API no disponible:', error);
    return false;
  }
}

// Función para obtener estadísticas de crímenes de un usuario
export async function getUserCrimeStats(userId: string): Promise<{
  totalCrimes: number;
  totalFines: number;
  totalPrison: number;
}> {
  try {
    const response = await fetch(`${API_BASE_URL}/user-offenses/${userId}`);
    
    if (!response.ok) {
      return { totalCrimes: 0, totalFines: 0, totalPrison: 0 };
    }
    
    const data = await response.json();
    
    if (!data.success || !Array.isArray(data.data)) {
      return { totalCrimes: 0, totalFines: 0, totalPrison: 0 };
    }
    
    const stats = data.data.reduce((acc: any, offense: UserOffense) => {
      acc.totalCrimes += 1;
      acc.totalFines += offense.fine || 0;
      acc.totalPrison += offense.prison || 0;
      return acc;
    }, { totalCrimes: 0, totalFines: 0, totalPrison: 0 });
    
    return stats;
    
  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    return { totalCrimes: 0, totalFines: 0, totalPrison: 0 };
  }
}

// Exportar datos por defecto para compatibilidad con el código existente
// NOTA: Esta función es async, por lo que donde se use necesitará await
export const crimes = {
  async getForUser(userId: string): Promise<Crime[]> {
    return await getCrimesForUser(userId);
  },
  
  async getAll(): Promise<Record<string, Crime[]>> {
    return await getAllCrimes();
  }
};

// Datos estáticos de fallback (por si el API no está disponible)
export const fallbackCrimes: Record<string, Crime[]> = {
  Z1001: [
    {
      reason: 'Robo con violencia',
      date: '2023-05-12',
      hour: '22:15',
      details: 'Asaltó a un peatón en sector céntrico de la ciudad y sustrajo sus pertenencias',
      conviction: '1 año de libertad vigilada',
      fine: '200.000 CLP'
    },
    {
      reason: 'Conducción bajo efecto de alcohol',
      date: '2022-11-03',
      hour: '03:40',
      details: 'Fue detenido manejando con 1.5 g/L de alcohol en sangre tras colisionar un vehículo estacionado',
      conviction: '6 meses de prisión remitida',
      fine: '100.000 CLP'
    }
  ],
  // Más datos de fallback si es necesario...
};

// Función helper para usar en los componentes con manejo de errores
export async function getCrimesWithFallback(userId: string): Promise<Crime[]> {
  const isApiHealthy = await checkApiHealth();
  
  if (!isApiHealthy) {
    console.warn('API no disponible, usando datos de fallback');
    return fallbackCrimes[userId] || [];
  }
  
  return await getCrimesForUser(userId);
}