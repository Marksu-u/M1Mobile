import React, { useState } from "react";

import { ThemeProvider } from "styled-components/native";
import ThemeContext from "./src/global/themeContext";
import BuddyThemes from "./src/components/themeProvider";

import Router from "./src/config/router";

export default App = () => {
  const [theme, setTheme] = useState(BuddyThemes.Ronnie);

  const handleThemeChange = (newTheme) => {
    setTheme(BuddyThemes[newTheme]);
  };

  return (
    <ThemeContext.Provider value={handleThemeChange}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
