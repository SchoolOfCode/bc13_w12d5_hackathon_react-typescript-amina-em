import {useState} from "react";

type FiveDayCardProps = {
    date: any
    description: string
    icon: any
    temperature: number
}

export default function FiveDayCard(props: FiveDayCardProps){

        let newDate = props.date.toDateString();
        return <div className="fiveDaySingleCard">
        <h3>{newDate}</h3>
        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={"icon"}/>
        <p>{props.temperature}</p>
        <p>{props.description}</p> 
    </div>
}