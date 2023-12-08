import React, { createContext, useState, useContext } from "react";

const themeContext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark");

  return (
    <themeContext.Provider value={{theme, setTheme}}>
        {children}
    </themeContext.Provider>
  )
}

function useTheme() {
    const context = useContext(themeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}    

export {useTheme, ThemeProvider}