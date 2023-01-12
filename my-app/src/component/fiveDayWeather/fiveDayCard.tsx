import { useContext } from "react";
import {newDay} from '../../data/data'
import { DarkModeContext } from "../../Context/DarkModeContext";

type FiveDayCardProps = {
  date: number;
  description: string;
  icon: any;
  temperature: number;
  toggle: boolean
};

export default function FiveDayCard(props: FiveDayCardProps) {
  const { darkMode } = useContext(DarkModeContext);

  let myDate = new Date(props.date * 1000);
  const finalDate = myDate.getDay();
  return (
    <div className="fiveDaySingleCard">
      <h3>{newDay[finalDate]}</h3>
   
      <img className="img-single"
        src={props.icon}
        alt={"icon"}
      />
       {/* <p>{props.description}</p> */}
    
      {props.toggle ? <p>{(props.temperature-273).toFixed(1)}°C</p> : <p>{(((props.temperature-273)*9/5)+32).toFixed(1)}°F</p>}
     
    </div>
  );
}


// //{
//   darkMode
//   ? `weather-card weather-card-dark`
//   : `weather-card weather-card-light`
// }