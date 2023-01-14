import { useContext, useState } from "react";
import "./weather.css";
import wind from "../../Assets/weather-icons/wind-speed.png";
import humidity from "../../Assets/weather-icons/humidity.png";
import pin from "../../Assets/weather-icons/location.png";
import sunset from "../../Assets/weather-icons/sunset.png";
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
  sunset: string;
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
          <p className="location-text">
            <img className="pin" src={pin} alt="source" />
            {props.city}
          </p>
          <div className="c-f-toggle-container">
            <div className="c-f-toggle-switch">
              <label className="switch">
                <input
                  type="checkbox"
                  className={
                    darkMode
                      ? `checkbox  checkbox-dark`
                      : `checkbox  checkbox-light`
                  }
                  onChange={() => {
                    onToggleClick(props.tempC);
                  }}
                />
                <span
                  className={
                    darkMode
                      ? `c-f-slider  c-f-slider-dark`
                      : `c-f-slider  c-f-slider-light`
                  }
                ></span>
              </label>
            </div>
          </div>
        </div>
        <div
          className={
            darkMode
              ? `weather-description-container weather-description-container-dark`
              : `weather-description-container weather-description-container-light`
          }
        >
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
        <div
          className={
            darkMode
              ? `weather-info weather-info-dark`
              : `weather-info weather-info-light`
          }
        >
          <p className="wind-speed">
            <img className="icon" src={wind} alt="wind" />

            <span className="units">{props.windspeed}kmph</span>
      
          </p>
          <p className="visibility">
            <img className="icon" src={sunset} alt="sunset" />

            <span className="units">
              {" "}
              {props.sunset }
            </span>
        
          </p>
          <p className="humidity">
            <img className="icon" src={humidity} alt="humidity" />

            <span className="units"> {props.humidity}%</span>

          </p>
        </div>
        <FiveDayWeather location={props.locationOnClick} toggle={toggle} />
      </div>
    </>
  );
}
