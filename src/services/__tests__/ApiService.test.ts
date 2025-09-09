import { ApiService } from '../ApiService';
import { Location } from '../../types';

// Mock fetch
global.fetch = jest.fn();

describe('ApiService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch shifts successfully', async () => {
    const mockLocation: Location = { latitude: 55.7558, longitude: 37.6176 };
    const mockResponse = {
      shifts: [
        {
          logo: 'https://example.com/logo.png',
          address: 'ул. Тестовая, 1',
          companyName: 'ООО Тест',
          dateStartByCity: '2024-01-15',
          timeStartByCity: '09:00:00',
          timeEndByCity: '18:00:00',
          currentWorkers: 3,
          planWorkers: 5,
          workTypes: 'Тестовая работа',
          priceWorker: 2500,
          customerFeedbacksCount: 10,
          customerRating: 4.5,
        },
      ],
    };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await ApiService.getShifts(mockLocation);

    expect(fetch).toHaveBeenCalledWith(
      `https://mobile.handswork.pro/api/shift?lat=${mockLocation.latitude}&lng=${mockLocation.longitude}`
    );
    expect(result).toEqual(mockResponse.shifts);
  });

  it('should handle API error', async () => {
    const mockLocation: Location = { latitude: 55.7558, longitude: 37.6176 };

    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    await expect(ApiService.getShifts(mockLocation)).rejects.toThrow(
      'Failed to fetch shifts'
    );
  });

  it('should handle network error', async () => {
    const mockLocation: Location = { latitude: 55.7558, longitude: 37.6176 };

    (fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    await expect(ApiService.getShifts(mockLocation)).rejects.toThrow(
      'Failed to fetch shifts'
    );
  });

  it('should handle empty response', async () => {
    const mockLocation: Location = { latitude: 55.7558, longitude: 37.6176 };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    });

    const result = await ApiService.getShifts(mockLocation);
    expect(result).toEqual([]);
  });
});
