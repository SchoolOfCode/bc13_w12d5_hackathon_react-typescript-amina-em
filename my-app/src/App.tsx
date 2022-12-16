import './App.css';
import {useState, useEffect} from "react";
import WeatherWidget from './component/weather/weather';
import Search from './component/search/search';
import Button from './component/button/Button';
import newImages from './data/data';
import FiveDayWeather from './component/fiveDayWeather/fiveDay'

function App() {

  const [tempC, setTempC] = useState(0);
  const [location, setLocation] = useState({City: "", Country:""});
  const [locationOnClick, setLocationOnClick]= useState({City: "", Country:""});
  const [icon, setIcon] = useState("");
  const [cityTag, setCityTag] = useState("");
  const [windspeed, setWindspeed] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState("");
  const [humidity, setHumidity] = useState(0);


  useEffect(() => {
    async function getData() {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=fc45f1c741819c4bf127ffd04b8ee142`
      );
      const data = await result.json();
      const temp: number | undefined = Number(
        (data.main.temp - 273.15).toFixed(1)
      );
      const myIcon = data.weather[0].icon
      if(myIcon === '01d' || myIcon === '01n'){
        setIcon(newImages.clearSky01dn);
      }
     
      setTempC(temp);
      setCityTag(data.name);
      setWeatherDescription(data.weather[0].main);
      setWindspeed(data.wind.speed);
      setHumidity(data.main.humidity);
    }
    getData();
  }, []);

  function getWeatherByLocation(): void {
    async function getData() {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location.City},${location.Country}&APPID=fc45f1c741819c4bf127ffd04b8ee142`
      );
      const data = await result.json();
      const temp: number | undefined = Number(
        (data.main.temp - 273.15).toFixed(1)
      );
      const myIcon = data.weather[0].icon
      
      if(myIcon === '01d' || myIcon === '01n'){
        setIcon(newImages.clearSky01dn);
      } else if (myIcon === '02d' || myIcon === '02n'){
        setIcon(newImages.fewClouds02dn);
      } else if (myIcon === '03d' || myIcon === '03n' || myIcon === '04d' || myIcon === '04n'){
        setIcon(newImages.scatteredClouds03dn);
      } else if (myIcon === '09d' || myIcon === '09n'){
        setIcon(newImages.showerRain09dn);
      } else if (myIcon === '10d' || myIcon === '10n'){
        setIcon(newImages.rain10dn);
      } else if (myIcon === '11d' || myIcon === '11n'){
        setIcon(newImages.thunderstorm11dn);
      } else if (myIcon === '13d' || myIcon === '13n'){
        setIcon(newImages.snow13d);
      } else if (myIcon === '50d' || myIcon === '50n'){
        setIcon(newImages.mist50d);
      }
      
     
      setTempC(temp);
      setCityTag(data.name);
      setLocationOnClick(location);
    }
    getData();
  };
  
  function onChangeCity(e: React.ChangeEvent<HTMLInputElement>){
    setLocation({...location, City:e.target.value})
  }
  
  return (
    <div className="App">
      <div className="findCity">
      <Search placeholder="Search City" onChange={onChangeCity}/>
     <Button onClick={getWeatherByLocation}></Button>
     </div>
     <WeatherWidget city = {cityTag} icon={icon} tempC={tempC} location={location} humidity={humidity} windspeed={windspeed} weatherDescription={weatherDescription}/>
    
    {/* <div>
      <FiveDayWeather location={locationOnClick}/>
    </div> */}
    </div>
  );
}

export default App;
