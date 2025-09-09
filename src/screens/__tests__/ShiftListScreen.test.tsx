import React from 'react';
import { render } from '@testing-library/react-native';
import { ShiftListScreen } from '../ShiftListScreen';

// Mock the ShiftStore
jest.mock('../../stores/ShiftStore');

describe('ShiftListScreen', () => {
  const mockShiftStoreInstance = {
    shifts: [],
    isLoading: false,
    error: null,
    loadShifts: jest.fn(),
  };

  const mockOnShiftPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    const loadingStore = { ...mockShiftStoreInstance, isLoading: true };

    const { getByTestId } = render(
      <ShiftListScreen
        shiftStore={loadingStore as any}
        onShiftPress={mockOnShiftPress}
      />
    );

    expect(getByTestId('loading-spinner')).toBeTruthy();
  });

  it('renders error state', () => {
    const errorStore = { ...mockShiftStoreInstance, error: 'Test error' };

    const { getByText } = render(
      <ShiftListScreen
        shiftStore={errorStore as any}
        onShiftPress={mockOnShiftPress}
      />
    );

    expect(getByText('Test error')).toBeTruthy();
  });

  it('renders empty state when no shifts', () => {
    const emptyStore = { ...mockShiftStoreInstance, shifts: [] };

    const { getByText } = render(
      <ShiftListScreen
        shiftStore={emptyStore as any}
        onShiftPress={mockOnShiftPress}
      />
    );

    expect(getByText('Нет доступных смен')).toBeTruthy();
  });
});
