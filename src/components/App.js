import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import {UserProvider} from "../context/user"
import {ThemeProvider, useTheme} from "../context/theme"

function App() {
  const {theme} = useTheme()
  
  return (
    <main className={theme}>
      <ThemeProvider>
        <UserProvider>
          <Header  />
          <Profile  />
        </UserProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;
