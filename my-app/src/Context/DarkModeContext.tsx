import { createContext, useState } from "react";

export type GlobalContent = {
  darkMode: Boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<GlobalContent>({
  darkMode: false, // set a default value
  toggleDarkMode: () => {},
});

type DarkModeProviderProps = {
  children: any;
};
function DarkModeProvider(props: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}

export { DarkModeContext, DarkModeProvider };
