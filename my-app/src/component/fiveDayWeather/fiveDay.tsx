import { useState, useEffect } from 'react';


export default function FiveDayWeather(){
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)

    useEffect(()=>{
        async function getFiveDay(){
            const data = await fetch('https://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=114c292ebf4279905376e7fa73cfb341');
            const response = await data.json()
            const latitude = response[0].lat
            const longitude = response[0].lon
            setLat(latitude)
            setLong(longitude)
            
            const fiveDayFetch = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=114c292ebf4279905376e7fa73cfb341`);
            const fiveDayResponse = await fiveDayFetch.json()
            console.log(fiveDayResponse)
        } getFiveDay()
    },[long, lat])

    return (
        <div className="five-day-container">
            <h3>Day</h3>
            <p>descrition</p>
            <p>image</p>
            <p>temp</p>
        </div>
    )
}