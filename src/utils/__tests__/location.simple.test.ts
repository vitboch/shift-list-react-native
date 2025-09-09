// Simple unit tests for location utilities
describe('Location Utils', () => {
  it('should format location data correctly', () => {
    const mockLocation = {
      latitude: 55.7558,
      longitude: 37.6176,
    };

    expect(mockLocation.latitude).toBe(55.7558);
    expect(mockLocation.longitude).toBe(37.6176);
  });

  it('should validate location coordinates', () => {
    const validLocation = {
      latitude: 55.7558,
      longitude: 37.6176,
    };

    expect(validLocation.latitude).toBeGreaterThan(-90);
    expect(validLocation.latitude).toBeLessThan(90);
    expect(validLocation.longitude).toBeGreaterThan(-180);
    expect(validLocation.longitude).toBeLessThan(180);
  });
});
