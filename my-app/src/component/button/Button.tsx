type buttonProps={
    onClick: ()=>void;
}

export default function Button(props: buttonProps) {
    return <button onClick={props.onClick}>Get Weather!</button>
}