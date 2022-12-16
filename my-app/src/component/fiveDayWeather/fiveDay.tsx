import { useState, useEffect } from 'react';
import FiveDayCard from './fiveDayCard';

type fiveDayProps = {
    location: {City: string, Country: string}
}

export default function FiveDayWeather(props: fiveDayProps){
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [cardsArray, setCardsArray] = useState([]);

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
            setCardsArray(fiveDayResponse.list)
            console.log(fiveDayResponse.list[0].dt_txt)
        } getFiveDay()
        console.log(cardsArray)
    },[long, lat, props.location.City, cardsArray])

    return (
         <div className="five-day-container">
           {cardsArray.filter((oneCard, index) => index < 5).map((oneCard)=>{
                return <FiveDayCard date={oneCard} />})
                }
        </div>
    )
}