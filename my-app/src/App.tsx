import './App.css';
import {useState} from "react";
import WeatherWidget from './component/weather/weather';
import Search from './component/search/search';

function App() {

  const [tempC, setTempC] = useState(0);
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState("");
  
  function getWeatherByLocation(location: string): void {
    async function getData() {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location},uk&APPID=fc45f1c741819c4bf127ffd04b8ee142`
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
  };
  
  function onChange(e: React.ChangeEvent<HTMLInputElement>){
    setLocation(e.target.value)
  }
  
  return (
    <div className="App">
      <Search onChange={onChange}/>
     <WeatherWidget icon={icon} tempC={tempC} location={location}/>
    </div>
  );
}

export default App;
