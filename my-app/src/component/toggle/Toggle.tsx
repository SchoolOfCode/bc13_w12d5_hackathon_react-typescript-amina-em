import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import "./Toggle.css";

export default function Toggle() {
  const {  toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  //   return <button onClick={handleClick}>Dark Mode</button>;

  return (
    <div className="container">
      {/* {" "} */}
      <div className="toggle-switch">
        <label className="switch">
          <input type="checkbox" className="checkbox" onChange={handleClick} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
