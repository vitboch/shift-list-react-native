import Geolocation from '@react-native-community/geolocation';
import {
  requestLocationPermission,
  getCurrentLocation,
  getLocationWithPermission,
} from '../location';

const mockGeolocation = Geolocation as jest.Mocked<typeof Geolocation>;

describe('Location Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('requestLocationPermission', () => {
    it('should resolve with true when permission is granted', async () => {
      mockGeolocation.requestAuthorization.mockImplementation(
        (success, _error) => {
          if (success) {
            success();
          }
          return undefined;
        }
      );

      const result = await requestLocationPermission();
      expect(result).toBe(true);
    });

    it('should resolve with false when permission is denied', async () => {
      const mockError = {
        code: 1,
        message: 'Permission denied',
      };

      mockGeolocation.requestAuthorization.mockImplementation(
        (_success, error) => {
          if (error) {
            error(mockError as any);
          }
          return undefined;
        }
      );

      const result = await requestLocationPermission();
      expect(result).toBe(false);
    });
  });

  describe('getCurrentLocation', () => {
    it('should resolve with location when successful', async () => {
      const mockPosition = {
        coords: {
          latitude: 55.7558,
          longitude: 37.6176,
        },
      };

      mockGeolocation.getCurrentPosition.mockImplementation(
        (success, _error) => {
          if (success) {
            success(mockPosition as any);
          }
          return undefined;
        }
      );

      const result = await getCurrentLocation();
      expect(result).toEqual({
        latitude: 55.7558,
        longitude: 37.6176,
      });
    });

    it('should reject with error when location fails', async () => {
      const mockError = {
        code: 1,
        message: 'Location error',
      };

      mockGeolocation.getCurrentPosition.mockImplementation(
        (_success, error) => {
          if (error) {
            error(mockError as any);
          }
          return undefined;
        }
      );

      await expect(getCurrentLocation()).rejects.toThrow('Location error');
    });
  });

  describe('getLocationWithPermission', () => {
    it('should get location when permission is granted', async () => {
      const mockPosition = {
        coords: {
          latitude: 55.7558,
          longitude: 37.6176,
        },
      };

      mockGeolocation.requestAuthorization.mockImplementation(
        (success, _error) => {
          if (success) {
            success();
          }
          return undefined;
        }
      );

      mockGeolocation.getCurrentPosition.mockImplementation(
        (success, _error) => {
          if (success) {
            success(mockPosition as any);
          }
          return undefined;
        }
      );

      const result = await getLocationWithPermission();
      expect(result).toEqual({
        latitude: 55.7558,
        longitude: 37.6176,
      });
    });

    it('should throw error when permission is denied', async () => {
      const mockError = {
        code: 1,
        message: 'Permission denied',
      };

      mockGeolocation.requestAuthorization.mockImplementation(
        (_success, error) => {
          if (error) {
            error(mockError as any);
          }
          return undefined;
        }
      );

      await expect(getLocationWithPermission()).rejects.toThrow(
        'Location permission denied'
      );
    });
  });
});
