import "./App.css";
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "./Context/DarkModeContext";
import WeatherWidget from "./component/weather/weather";
import Search from "./component/search/search";
import Button from "./component/button/Button";
import Toggle from "./component/toggle/Toggle";
import { newImageMap } from "./data/data";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [tempC, setTempC] = useState(0);
  const [visibility, setVisibility] = useState(0)
  const [locationForm, setLocationForm] = useState({ City: "", Country: "" });
  const [locationOnClick, setLocationOnClick] = useState({
    City: "london",
    Country: "uk",
  });
  const [icon, setIcon] = useState("");
  const [cityTag, setCityTag] = useState("");
  const [windspeed, setWindspeed] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState("");
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    async function getData() {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationOnClick.City},${locationOnClick.Country}&APPID=fc45f1c741819c4bf127ffd04b8ee142`
      );
      const data = await result.json();
      const temp: number | undefined = Number(
        (data.main.temp - 273.15).toFixed(1)
      );
      const myIcon = data.weather[0].icon;

      setIcon(newImageMap[myIcon]);

      setTempC(temp);
      setCityTag(data.name);
      setWeatherDescription(data.weather[0].main);
      setWindspeed(data.wind.speed);
      setHumidity(data.main.humidity);
      setVisibility(data.visibility)

    }
    getData();
  }, [locationOnClick]);

  function getWeatherByLocation(): void {
    async function getData() {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationForm.City},${locationForm.Country}&APPID=fc45f1c741819c4bf127ffd04b8ee142`
      );
      const data = await result.json();
      const temp: number | undefined = Number(
        (data.main.temp - 273.15).toFixed(1)
      );
      console.log(data)
      const myIcon = data.weather[0].icon;
      setIcon(newImageMap[myIcon]);

      setTempC(temp);
      setCityTag(data.name);
      setLocationOnClick(locationForm);
      setVisibility(data.visibility)
    }
    getData();
  }

  function onChangeCity(e: React.ChangeEvent<HTMLInputElement>) {
    setLocationForm({ ...locationForm, City: e.target.value });
  }

  return (
    <div className={darkMode ? `App App-Dark` : `App App-Light`}>
      <div className="findCity">
        <Search placeholder="Search City" onChange={onChangeCity} />
        <Button onClick={getWeatherByLocation}></Button>
        <Toggle />
      </div>
      <WeatherWidget
        locationOnClick={locationOnClick}
        city={cityTag}
        icon={icon}
        tempC={tempC}
        location={locationForm}
        humidity={humidity}
        windspeed={windspeed}
        weatherDescription={weatherDescription}
        visibility={visibility}
      />

      <div></div>
    </div>
  );
}

export default App;
