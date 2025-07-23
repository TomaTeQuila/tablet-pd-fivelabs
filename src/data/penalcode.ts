const API_BASE_URL = 'http://localhost:3000/api';

export interface PenalCode {
  id: number;
  name: string;
  description: string;
  fine: number;
  prison: number;
  category?: string;
}

interface ApiResponse {
  success: boolean;
  data: PenalCode[];
  count: number;
}

export async function getAllPenalCodes(): Promise<PenalCode[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/penal-codes`)
    if (!response.ok) throw new Error('No se pudieron obtener los items del codigo penal')

    const json = (await response.json()) as ApiResponse
    return Array.isArray(json.data) ? json.data : [];
  } catch (error) {
    console.error('Error obteniendo los items del codigo penal: ', error);
    return [];
  }
}

export const penalCodeData = {
  async getAll(): Promise<PenalCode[]> {
      return await getAllPenalCodes();
  }
};