import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

export default function Toggle() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return <button onClick={handleClick}>Dark Mode</button>;
}
