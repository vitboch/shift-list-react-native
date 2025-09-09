import { ShiftStore } from '../ShiftStore';
import { ApiService } from '../../services/ApiService';
import { getLocationWithPermission } from '../../utils/location';

// Mock dependencies
jest.mock('../../services/ApiService');
jest.mock('../../utils/location');

const mockApiService = ApiService as jest.Mocked<typeof ApiService>;
const mockGetLocationWithPermission =
  getLocationWithPermission as jest.MockedFunction<
    typeof getLocationWithPermission
  >;

describe('ShiftStore', () => {
  let shiftStore: ShiftStore;

  beforeEach(() => {
    shiftStore = new ShiftStore();
    jest.clearAllMocks();
  });

  it('should initialize with empty state', () => {
    expect(shiftStore.shifts).toEqual([]);
    expect(shiftStore.isLoading).toBe(false);
    expect(shiftStore.error).toBeNull();
    expect(shiftStore.location).toBeNull();
  });

  it('should load shifts successfully', async () => {
    const mockLocation = { latitude: 55.7558, longitude: 37.6176 };
    const mockShifts = [
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
    ];

    mockGetLocationWithPermission.mockResolvedValue(mockLocation);
    mockApiService.getShifts.mockResolvedValue(mockShifts);

    await shiftStore.loadShifts();

    expect(shiftStore.location).toEqual(mockLocation);
    expect(shiftStore.shifts).toEqual(mockShifts);
    expect(shiftStore.isLoading).toBe(false);
    expect(shiftStore.error).toBeNull();
  });

  it('should handle location error', async () => {
    const mockError = new Error('Location permission denied');
    mockGetLocationWithPermission.mockRejectedValue(mockError);

    await shiftStore.loadShifts();

    expect(shiftStore.error).toBe('Location permission denied');
    expect(shiftStore.isLoading).toBe(false);
  });

  it('should handle API error', async () => {
    const mockLocation = { latitude: 55.7558, longitude: 37.6176 };
    const mockError = new Error('API error');

    mockGetLocationWithPermission.mockResolvedValue(mockLocation);
    mockApiService.getShifts.mockRejectedValue(mockError);

    await shiftStore.loadShifts();

    expect(shiftStore.error).toBe('API error');
    expect(shiftStore.isLoading).toBe(false);
  });

  it('should get shift by id', () => {
    const mockShifts = [
      { id: 0, companyName: 'Company 1' },
      { id: 1, companyName: 'Company 2' },
    ] as any;

    shiftStore.shifts = mockShifts;

    expect(shiftStore.getShiftById(0)).toEqual(mockShifts[0]);
    expect(shiftStore.getShiftById(1)).toEqual(mockShifts[1]);
    expect(shiftStore.getShiftById(2)).toBeUndefined();
  });

  it('should clear error', () => {
    shiftStore.error = 'Some error';
    shiftStore.clearError();
    expect(shiftStore.error).toBeNull();
  });
});
