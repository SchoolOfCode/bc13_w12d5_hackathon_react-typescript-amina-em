import { useContext, useState } from "react";
import "./weather.css";
import wind from "../../Assets/weather-icons/wind-speed.png";
import humidity from "../../Assets/weather-icons/humidity.png";
import pin from "../../Assets/weather-icons/location.png";
import visbility from "../../Assets/weather-icons/visibility.png"
import FiveDayWeather from "../fiveDayWeather/fiveDay";
import { DarkModeContext } from "../../Context/DarkModeContext";

type weatherWidgetProps = {
  icon: string;
  locationOnClick: { City: string; Country: string };
  location: { City: string; Country: string };
  tempC: number;
  city: string;
  windspeed: number;
  weatherDescription: string;
  humidity: number;
  visibility: number;
};

export default function WeatherWidget(props: weatherWidgetProps) {
  const { darkMode } = useContext(DarkModeContext);
  const [tempF, setTempF] = useState(0);
  const [toggle, setToggle] = useState(true);

  function onToggleClick(tempC: number): void {
    const fh: number = Number((tempC * (5 / 9) + 32).toFixed(1));
    setTempF(fh);
    setToggle(!toggle);
  }

  return (
    <>
      <div
        className={
          darkMode
            ? `weather-card weather-card-dark`
            : `weather-card weather-card-light`
        }
      >
        <div className="card-header">
        <p>
          <img className="pin" src={pin} alt="source" />
          {props.city}
        </p>
        {/* {toggle ? (
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
        )} */}
        </div>
        <div className="weather-description-container">
        <img className="weather-icon" src={props.icon} alt="weather-icon" />
          <div className="today-weather-info">
       
        {toggle ? (
            <p className="temp">
              {props.tempC}
              <span className="units">°C</span>
            </p>
          ) : (
            <p className="temp">
              {tempF}
              <span className="units">°F</span>
            </p>
          )}
           <p>{props.weatherDescription}</p>
        </div>      
    
        </div>
        <div className="weather-info">
          <p className="wind-speed">
            <img className="icon" src={wind} alt="wind" />

            <span className="units">{props.windspeed}kmph</span>
          </p>
          <p className="visibility">
            <img className="icon" src={visbility} alt="visibility" />
           
            <span className="units"> {(props.visibility/1000).toFixed(1)}km</span>
          </p>
          <p className="humidity">
            <img className="icon" src={humidity} alt="humidity" />
          
            <span className="units">  {props.humidity}%</span>
          </p>
        </div>
        <FiveDayWeather location={props.locationOnClick} toggle={toggle} />
      </div>
    </>
  );
}
