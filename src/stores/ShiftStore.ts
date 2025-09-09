import { makeAutoObservable } from 'mobx';
import { Shift, Location } from '../types';
import { ApiService } from '../services/ApiService';
import { getLocationWithPermission } from '../utils/location';

export class ShiftStore {
  shifts: Shift[] = [];
  isLoading = false;
  error: string | null = null;
  location: Location | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async loadShifts() {
    this.isLoading = true;
    this.error = null;

    try {
      // Get location first
      if (!this.location) {
        this.location = await getLocationWithPermission();
      }

      // Fetch shifts
      const shifts = await ApiService.getShifts(this.location!);
      this.shifts = shifts;
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error loading shifts:', error);
    } finally {
      this.isLoading = false;
    }
  }

  getShiftById(id: number): Shift | undefined {
    return this.shifts[id];
  }

  clearError() {
    this.error = null;
  }
}
