import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ShiftCard } from '../ShiftCard';
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

describe('ShiftCard', () => {
  it('renders shift information correctly', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ShiftCard shift={mockShift} onPress={mockOnPress} />
    );

    expect(getByText('ООО Тест')).toBeTruthy();
    expect(getByText('Тестовая работа')).toBeTruthy();
    expect(getByText('2 500 ₽')).toBeTruthy();
    expect(getByText('3/5 человек')).toBeTruthy();
    expect(getByText('★ 4.5')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <ShiftCard shift={mockShift} onPress={mockOnPress} />
    );

    fireEvent.press(getByTestId('shift-card'));
    expect(mockOnPress).toHaveBeenCalledWith(mockShift);
  });

  it('formats price correctly', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ShiftCard shift={mockShift} onPress={mockOnPress} />
    );

    expect(getByText('2 500 ₽')).toBeTruthy();
  });

  it('calculates workers percentage correctly', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <ShiftCard shift={mockShift} onPress={mockOnPress} />
    );

    const workersBar = getByTestId('workers-bar');
    expect(workersBar).toBeTruthy();
  });
});
