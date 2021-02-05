import React, { useState, useContext } from "react";
import { cssChange } from "../services/cssChange";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(THEME_LIGHT);

  const change = (name) => {
    setTheme(name);
    cssChange(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
