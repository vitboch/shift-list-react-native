import { Shift, Location, ApiResponse } from '../types';

const API_BASE_URL = 'https://mobile.handswork.pro/api';

export class ApiService {
  static async getShifts(location: Location): Promise<Shift[]> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/shift?lat=${location.latitude}&lng=${location.longitude}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      return data.shifts || [];
    } catch (error) {
      console.error('Error fetching shifts:', error);
      throw new Error('Failed to fetch shifts');
    }
  }
}
