import React from 'react';
import { render } from '@testing-library/react-native';
import { ShiftDetailsScreen } from '../ShiftDetailsScreen';
import { Shift } from '../../types';

const mockShift: Shift = {
  logo: 'https://example.com/logo.png',
  address: 'ул. Тестовая, 1, Москва',
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

const mockOnBack = jest.fn();

describe('ShiftDetailsScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders shift details correctly', () => {
    const { getByText } = render(
      <ShiftDetailsScreen shift={mockShift} onBack={mockOnBack} />
    );

    expect(getByText('ООО Тест')).toBeTruthy();
    expect(getByText('Тестовая работа')).toBeTruthy();
    expect(getByText('2 500 ₽')).toBeTruthy();
    expect(getByText('3 из 5 человек')).toBeTruthy();
    expect(getByText('★ 4.5')).toBeTruthy();
  });

  it('handles back button press', () => {
    const { getByTestId } = render(
      <ShiftDetailsScreen shift={mockShift} onBack={mockOnBack} />
    );

    const backButton = getByTestId('back-button');
    expect(backButton).toBeTruthy();
  });
});
