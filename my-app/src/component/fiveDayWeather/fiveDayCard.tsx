import {newDay} from '../../data/data'

type FiveDayCardProps = {
  date: number;
  description: string;
  icon: any;
  temperature: number;
  onToggleClick: (number: number)=> void;
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
      <p>{(props.temperature -273).toFixed(1)} °C</p>
      {ontoggle ? <p className="temp">{(props.temperature -273).toFixed(1)}<span className="units">°C</span></p> : <p className="temp">{(((props.temperature -273)*(9/5))+32).toFixed}<span className="units">°F</span></p>}
      <p>{props.description}</p>
    </div>
  );
}
