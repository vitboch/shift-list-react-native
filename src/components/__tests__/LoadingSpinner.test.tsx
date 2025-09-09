import React from 'react';
import { render } from '@testing-library/react-native';
import { LoadingSpinner } from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders loading spinner', () => {
    const { getByTestId } = render(<LoadingSpinner />);

    expect(getByTestId('loading-spinner')).toBeTruthy();
  });

  it('renders with custom message', () => {
    const { getByText } = render(
      <LoadingSpinner message="Custom loading..." />
    );

    expect(getByText('Custom loading...')).toBeTruthy();
  });

  it('renders with default message when no message provided', () => {
    const { getByText } = render(<LoadingSpinner />);

    expect(getByText('Loading...')).toBeTruthy();
  });
});
