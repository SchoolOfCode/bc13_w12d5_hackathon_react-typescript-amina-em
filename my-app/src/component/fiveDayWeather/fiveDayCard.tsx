import {newDay} from '../../data/data'

type FiveDayCardProps = {
  date: number;
  description: string;
  icon: any;
  temperature: number;
  toggle: boolean
};

export default function FiveDayCard(props: FiveDayCardProps) {

  let myDate = new Date(props.date * 1000);
  const finalDate = myDate.getDay();
  return (
    <div className="fiveDaySingleCard">
      <h3>{newDay[finalDate]}</h3>
      <img
        src={props.icon}
        alt={"icon"}
      />
      {props.toggle ? <p>{(props.temperature-273).toFixed(1)}°C</p> : <p>{(((props.temperature-273)*9/5)+32).toFixed(1)}°F</p>}
      <p>{props.description}</p>
    </div>
  );
}
