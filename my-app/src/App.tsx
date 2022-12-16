import './App.css';
import {useState, useEffect} from "react";
import WeatherWidget from './component/weather/weather';
import Search from './component/search/search';
import Button from './component/button/Button';

function App() {

  const [tempC, setTempC] = useState(0);
  const [location, setLocation] = useState({City: "", Country:""});
  const [icon, setIcon] = useState("");

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

  function getWeatherByLocation(): void {
    async function getData() {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location.City},${location.Country}&APPID=fc45f1c741819c4bf127ffd04b8ee142`
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
  
  function onChangeCity(e: React.ChangeEvent<HTMLInputElement>){
    setLocation({...location, City:e.target.value})
  }
  function onChangeCountry(e: React.ChangeEvent<HTMLInputElement>){
    setLocation({...location, Country:e.target.value})
  }
  
  return (
    <div className="App">
      <Search placeholder="Search City" onChange={onChangeCity}/>
      <Search placeholder="Search Country" onChange={onChangeCountry}/>
     <WeatherWidget icon={icon} tempC={tempC} location={location}/>
     <Button onClick={getWeatherByLocation}></Button>
    </div>
  );
}

export default App;
