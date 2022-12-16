import { useState } from "react";
import './weather.css'

type weatherWidgetProps = {
  icon: string;
  location: {City: string, 
  Country: string};
  tempC: number,
  city: string,
 
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
      <p> 📍{props.city}</p>
      <img
        src={props.icon}
        alt="weather-icon"
      />
      {toggle ? <p>{props.tempC}°C</p> : <p>{tempF}°F</p>}
      {toggle ? (
        <button className='toggle'
          onClick={() => {
            onToggleClick(props.tempC);
          }}
        >
          {" "}
          change to farenheit
        </button>
      ) : (
        <button className='toggle'
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
