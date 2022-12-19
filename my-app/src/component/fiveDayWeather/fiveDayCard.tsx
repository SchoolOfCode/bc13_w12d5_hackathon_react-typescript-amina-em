type FiveDayCardProps = {
    date: number
    //description: string
    //icon: string
    //temperature: number
}

export default function FiveDayCard(props: FiveDayCardProps){
    return <div>
        <h3>{props.date}</h3>
        {/* //<img src={props.icon} alt={"icon"}/>
        //<p>{props.temperature}</p>
        //<p>{props.description}</p> */}
    </div>
}