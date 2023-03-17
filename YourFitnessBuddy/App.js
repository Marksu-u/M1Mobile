import React, { useState } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import BuddyThemes from "./src/components/themeProvider";
import HomeScreen from "./src/screens/home/index";

export default App = () => {
  const [theme, setTheme] = useState(BuddyThemes.Ronnie);

  console.log("theme", theme);

  const handleThemeChange = (newTheme) => {
    setTheme(BuddyThemes[newTheme]);
  };

  return (
    <ThemeProvider theme={theme}>
      <HomeScreen handleThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
};
