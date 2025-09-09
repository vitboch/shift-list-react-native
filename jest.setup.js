// Mock fetch
global.fetch = global.fetch || (() => Promise.resolve());

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: () => {},
  debug: () => {},
  info: () => {},
  warn: () => {},
  error: () => {},
};

// Mock @react-native-community/geolocation
/* eslint-env jest */
jest.mock('@react-native-community/geolocation', () => ({
  requestAuthorization: jest.fn(),
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
  clearWatch: jest.fn(),
  stopObserving: jest.fn(),
}));

// Mock mobx-react-lite
jest.mock('mobx-react-lite', () => ({
  observer: component => component,
}));
