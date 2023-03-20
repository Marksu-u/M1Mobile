import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";

import BuddyThemes from "./src/components/themeProvider";
import HomeScreen from "./src/screens/home/index";
import ThemeHandler from "./src/components/themeHandler";

export default App = () => {
  const [theme, setTheme] = useState(BuddyThemes.Ronnie); // Ronnie is the default theme
  const handleThemeChange = (newTheme) => {
    setTheme(BuddyThemes[newTheme]);
  };

  return (
    <ThemeProvider theme={theme}>
      <HomeScreen handleThemeChange={handleThemeChange} />
      <ThemeHandler handleThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
};
