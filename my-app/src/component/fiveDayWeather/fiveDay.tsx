import { useState, useEffect } from 'react';
import FiveDayCard from './fiveDayCard';

type fiveDayProps = {
    location: {City: string, Country: string}
}

type cardsArrayData = {

    cardsArray: any

}

export default function FiveDayWeather(props: fiveDayProps){
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [cardsArray, setCardsArray] = useState([{
        dt: 1671451200,
        dt_txt: "2022-12-19 12:00:00",
        visibility: 10000,
        wind: {speed: 6.42, deg: 317, gust: 7.72}}]);

    useEffect(()=>{
        async function getFiveDay(){
            const data = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${props.location.City}&limit=1&appid=114c292ebf4279905376e7fa73cfb341`);
            const response = await data.json()
            const latitude = response[0].lat
            const longitude = response[0].lon
            setLat(latitude)
            setLong(longitude)    
            const fiveDayFetch = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=114c292ebf4279905376e7fa73cfb341`);
            const fiveDayResponse = await fiveDayFetch.json()
            console.log(fiveDayResponse.list)
            setCardsArray(fiveDayResponse.list)
            
        } getFiveDay()
    },[long, lat, props.location.City])

    return (
         <div className="five-day-container">
            {cardsArray.filter((oneCard, index) => index < 5).map((oneCard)=>{ 
             return <FiveDayCard date={cardsArray[0].dt} />    })}
        </div>
    )
}

//
   // 