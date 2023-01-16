import './Button.css';
import { useContext } from 'react';
import { DarkModeContext } from "../../Context/DarkModeContext";
type buttonProps={
    onClick: ()=>void;
}

export default function Button(props: buttonProps) {
    const { darkMode } = useContext(DarkModeContext);
    return <button className={
        darkMode
          ? `button button-dark`
          : `button button-light`
      } onClick={props.onClick}>Get Weather!</button>
}