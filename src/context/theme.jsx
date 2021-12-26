import { createContext, useState } from "react";

const THEME = {
  light: {
    mode: 'light',
    primary: '#ff0000',
  }, 
  dart: {
    mode: 'dark',
    primary: '#00ff00',
  }
}

export const themeContext = createContext("light");

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dart" : "light");
  };

  return (
    <themeContext.Provider value={{...THEME[theme], onChange: toggleTheme}}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider;