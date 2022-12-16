import { useState, useEffect } from "react";
import './weather.css'

export default function WeatherWidget() {
  const [icon, setIcon] = useState("");
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(0);
  const [toggle, setToggle] = useState(true);

  function onClick(tempC: number): void {
    const fh: number = Number((tempC * (5 / 9) + 32).toFixed(1));
    setTempF(fh);
    setToggle(!toggle);
  }

  useEffect(() => {
    async function getData() {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=fc45f1c741819c4bf127ffd04b8ee142`
      );
      const data = await result.json();
      console.log(data)
      const temp: number | undefined = Number(
        (data.main.temp - 273.15).toFixed(1)
      );
      setIcon(data.weather[0].icon);
     
      setTempC(temp);
    }
    getData();
  }, []);

  
  console.log(`http://openweathermap.org/img/wn/${icon}@2x.png`)
  return (
    <div className="weather-card">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
      />
      {toggle ? <p>{tempC}</p> : <p>{tempF}</p>}
      {toggle ? (
        <button
          onClick={() => {
            onClick(tempC);
          }}
        >
          {" "}
          change to farenheit
        </button>
      ) : (
        <button
          onClick={() => {
            onClick(tempC);
          }}
        >
          {" "}
          change to celsius
        </button>
      )}
    </div>
  );
}
