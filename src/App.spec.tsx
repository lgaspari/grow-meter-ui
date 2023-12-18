import { render, screen, within } from '@testing-library/react';
import App from './App';

test('should display sensor values', () => {
  render(<App />);

  const sensorValues = screen.getAllByTestId('sensor-value');

  [
    { label: 'Temperature', unit: '°C', value: '25.0' },
    { label: 'Soil Moisture', unit: '%', value: '42.0' },
    { label: 'TDS', unit: 'ppm', value: '1000' },
    { label: 'pH', value: '14.00' },
  ].forEach(({ label, unit, value }, index) => {
    const sensorValue = within(sensorValues[index]);

    expect(sensorValue.getByText(label)).toBeInTheDocument();
    expect(sensorValue.getByText(value)).toBeInTheDocument();

    if (unit) {
      expect(sensorValue.getByText(unit)).toBeInTheDocument();
    }
  });
});
