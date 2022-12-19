type FiveDayCardProps = {
    date: number
    description: string
    icon: any
    temperature: number
}

export default function FiveDayCard(props: FiveDayCardProps){
    return <div>
        <h3>{props.date}</h3>
        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={"icon"}/>
        <p>{props.temperature}</p>
        <p>{props.description}</p> 
    </div>
}