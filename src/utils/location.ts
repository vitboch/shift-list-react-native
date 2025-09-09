import Geolocation from '@react-native-community/geolocation';
import { Location, LocationError } from '../types';

export const requestLocationPermission = (): Promise<boolean> => {
  return new Promise(resolve => {
    Geolocation.requestAuthorization(
      () => resolve(true),
      error => {
        console.warn('Location permission denied:', error);
        resolve(false);
      }
    );
  });
};

export const getCurrentLocation = (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error: LocationError) => {
        console.error('Location error:', error);
        reject(new Error(`Location error: ${error.message}`));
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  });
};

export const getLocationWithPermission = async (): Promise<Location> => {
  const hasPermission = await requestLocationPermission();

  if (!hasPermission) {
    throw new Error('Location permission denied');
  }

  return getCurrentLocation();
};
