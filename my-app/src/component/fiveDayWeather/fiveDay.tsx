import { useState, useEffect } from "react";
import FiveDayCard from "./fiveDayCard";
import "./fiveDay.css";

type fiveDayProps = {
  location: { City: string; Country: string };
};

interface DataObject {
  dt: number;
  weather: [{ description: string; icon: any }];
  main: { temp: number };
}

export default function FiveDayWeather(props: fiveDayProps) {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [cardsArray, setCardsArray] = useState<DataObject[]>([]);

  useEffect(() => {
    async function getFiveDay() {
      console.log(props.location.City)
      const data = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${props.location.City}&limit=1&appid=114c292ebf4279905376e7fa73cfb341`
      );
      const response = await data.json();
      if (response[0]) {
        const latitude = response[0].lat;
        const longitude = response[0].lon;
        setLat(latitude);
        setLong(longitude);
      }
      const fiveDayFetch = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=114c292ebf4279905376e7fa73cfb341`
      );
      const fiveDayResponse = await fiveDayFetch.json();
      console.log(fiveDayResponse.list);
      setCardsArray(fiveDayResponse.list);
    }
    getFiveDay();
  }, [long, lat, props.location.City]);

  return (
    <div className="five-day-container">
      {cardsArray
        .filter((oneCard, index) => index%8===7)
        .map((oneCard) => {
          return (
            <FiveDayCard
              date={oneCard.dt}
              description={oneCard.weather[0].description}
              temperature={oneCard.main.temp}
              icon={oneCard.weather[0].icon}
            />
          );
        })}
    </div>
  );
}
