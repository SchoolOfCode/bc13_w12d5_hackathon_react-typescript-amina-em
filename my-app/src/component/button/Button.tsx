import './Button.css';

type buttonProps={
    onClick: ()=>void;
}

export default function Button(props: buttonProps) {
    return <button className="button" onClick={props.onClick}>Get Weather!</button>
}