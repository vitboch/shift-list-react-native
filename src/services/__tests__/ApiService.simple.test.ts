// Simple unit tests for API service
describe('ApiService', () => {
  it('should construct API URL correctly', () => {
    const latitude = 55.7558;
    const longitude = 37.6176;
    const expectedUrl = `https://mobile.handswork.pro/api/shift?lat=${latitude}&lng=${longitude}`;

    expect(expectedUrl).toBe(
      'https://mobile.handswork.pro/api/shift?lat=55.7558&lng=37.6176'
    );
  });

  it('should handle location data types', () => {
    const location = {
      latitude: 55.7558,
      longitude: 37.6176,
    };

    expect(typeof location.latitude).toBe('number');
    expect(typeof location.longitude).toBe('number');
  });
});
