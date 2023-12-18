import PhIcon from 'icons/ph.svg?react';
import SoilMoistureIcon from 'icons/soil-moisture.svg?react';
import TemperatureIcon from 'icons/temperature.svg?react';
import TdsIcon from 'icons/tds.svg?react';
import './App.css';

interface SensorValueProps {
  className: string;
  icon: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
  label: string;
  unit?: string;
  value: string;
}

function SensorValue({
  className,
  icon: Icon,
  label,
  unit,
  value,
}: SensorValueProps) {
  return (
    <div
      className={['sensor-value', className].join(' ')}
      data-testid="sensor-value"
    >
      <div className="sensor-value__reading">
        <div className="sensor-value__value">{value}</div>
        {unit && <div className="sensor-value__unit">{unit}</div>}
      </div>
      <div className="sensor-value__label">
        {label} <Icon />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="sensor-values">
      <SensorValue
        className="sensor-value--temperature"
        icon={TemperatureIcon}
        label="Temperature"
        unit="°C"
        value={(25.0).toFixed(1)}
      />
      <SensorValue
        className="sensor-value--soil-moisture"
        icon={SoilMoistureIcon}
        label="Soil Moisture"
        unit="%"
        value={(42.0).toFixed(1)}
      />
      <SensorValue
        className="sensor-value--tds"
        icon={TdsIcon}
        label="TDS"
        unit="ppm"
        value={(1000).toFixed(0)}
      />
      <SensorValue
        className="sensor-value--ph"
        icon={PhIcon}
        label="pH"
        value={(14.0).toFixed(2)}
      />
    </div>
  );
}
