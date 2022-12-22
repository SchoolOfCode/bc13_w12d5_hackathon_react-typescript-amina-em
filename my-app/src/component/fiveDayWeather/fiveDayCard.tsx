type FiveDayCardProps = {
  date: number;
  description: string;
  icon: any;
  temperature: number;
};

export default function FiveDayCard(props: FiveDayCardProps) {
  let myDate = new Date(props.date * 1000);
  const finalDate = myDate.toLocaleDateString();
  return (
    <div className="fiveDaySingleCard">
      <h3>{finalDate}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt={"icon"}
      />
      <p>{props.temperature}</p>
      <p>{props.description}</p>
    </div>
  );
}
