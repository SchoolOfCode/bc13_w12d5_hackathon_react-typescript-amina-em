import { useState } from "react";
import "./weather.css";
import wind from '../../Assets/weather-icons/wind-speed.png'
import humidity from '../../Assets/weather-icons/humidity.png'
import pin from '../../Assets/weather-icons/location.png'
import FiveDayWeather from "../fiveDayWeather/fiveDay";

type weatherWidgetProps = {
  icon: string;
  locationOnClick: { City: string; Country: string };
  location: { City: string; Country: string };
  tempC: number;
  city: string;
  windspeed: number;
  weatherDescription: string;
  humidity: number;
};

export default function WeatherWidget(props: weatherWidgetProps) {
  const [tempF, setTempF] = useState(0);
  const [toggle, setToggle] = useState(true);

  function onToggleClick(tempC: number): void {
    const fh: number = Number((tempC * (5 / 9) + 32).toFixed(1));
    setTempF(fh);
    setToggle(!toggle);
  }

  return (
    <>
    <div className="weather-card">
      <p><img className="pin" src={pin} alt="source"/>{props.city}</p>
      <img className="weather-icon" src={props.icon} alt="weather-icon" />
      <div className="weather-info">
        <p className="wind-speed"><img className= "icon" src={wind} alt="wind"/>{props.windspeed}<span className="units">mph</span></p>
        {toggle ? <p className="temp">{props.tempC}<span className="units">°C</span></p> : <p className="temp">{tempF}<span className="units">°F</span></p>}

        <p className="humidity"><img className= "icon" src={humidity} alt="humidity"/>{props.humidity}<span className="units">%</span></p>
      </div>
      {toggle ? (
        <button
          className="toggle"
          onClick={() => {
            onToggleClick(props.tempC);
          }}
        >
          {" "}
          Change to Farenheit
        </button>
      ) : (
        <button
          className="toggle"
          onClick={() => {
            onToggleClick(props.tempC);
          }}
        >
          {" "}
          Change to Celsius
        </button>
      )}

      
    </div>
    <div className="five-day-container">
    <FiveDayWeather location={props.locationOnClick} toggle={toggle}/>
    </div>
    </>
  );
}
