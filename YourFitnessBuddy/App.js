import React, { useState } from "react";

import { ThemeProvider } from "styled-components/native";
import BuddyThemes from "./src/components/themeProvider";

import Router from "./src/config/router";

export default App = () => {
  const [theme, setTheme] = useState(BuddyThemes.Ronnie);
  const handleThemeChange = (newTheme) => {
    setTheme(BuddyThemes[newTheme]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router handleThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
};
