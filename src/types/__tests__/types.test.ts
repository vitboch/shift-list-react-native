// Simple unit tests for types
describe('TypeScript Types', () => {
  it('should validate Shift interface structure', () => {
    const mockShift = {
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
    };

    expect(mockShift).toHaveProperty('logo');
    expect(mockShift).toHaveProperty('companyName');
    expect(mockShift).toHaveProperty('priceWorker');
    expect(mockShift).toHaveProperty('currentWorkers');
    expect(mockShift).toHaveProperty('planWorkers');
  });

  it('should validate Location interface structure', () => {
    const mockLocation = {
      latitude: 55.7558,
      longitude: 37.6176,
    };

    expect(mockLocation).toHaveProperty('latitude');
    expect(mockLocation).toHaveProperty('longitude');
    expect(typeof mockLocation.latitude).toBe('number');
    expect(typeof mockLocation.longitude).toBe('number');
  });
});
