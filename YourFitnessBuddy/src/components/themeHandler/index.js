import React, { useState } from "react";
import { View, Button } from "react-native";
// import { ThemeProvider } from "styled-components/native";

// import BuddyThemes from "../themeProvider";

export default ThemeHandler = () => {
  return (
      <View style={{ marginVertical: 10 }}>
        <Button title="Arnold" onPress={() => handleThemeChange("Arnold")} />
        <Button title="Ronnie" onPress={() => handleThemeChange("Ronnie")} />
        <Button title="Cbum" onPress={() => handleThemeChange("Cbum")} />
      </View>
  );
};
