import { useState } from "react";
import './weather.css'

type weatherWidgetProps = {
  icon: string;
  location: {City: string, 
  Country: string};
  tempC: number
}

export default function WeatherWidget(props: weatherWidgetProps) {
  const [tempF, setTempF] = useState(0);
  const [toggle, setToggle] = useState(true);

  function onToggleClick(tempC: number): void {
    const fh: number = Number((tempC * (5 / 9) + 32).toFixed(1));
    setTempF(fh);
    setToggle(!toggle);
  }

  return (
    <div className="weather-card">
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="weather-icon"
      />
      {toggle ? <p>{props.tempC}°C</p> : <p>{tempF}°F</p>}
      {toggle ? (
        <button
          onClick={() => {
            onToggleClick(props.tempC);
          }}
        >
          {" "}
          change to farenheit
        </button>
      ) : (
        <button
          onClick={() => {
            onToggleClick(props.tempC);
          }}
        >
          {" "}
          change to celsius
        </button>
      )}
    </div>
  );
        }
