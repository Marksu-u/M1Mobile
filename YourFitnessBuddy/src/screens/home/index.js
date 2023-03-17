import React from "react";
import { Text, View, Image } from "react-native";
import { useTheme } from "styled-components/native";

import SearchBar from "../../components/searchBar";
import AppNavigator from "../../components/appNavigator";

import { Container, Overlay, Content, Title, Subtitle, BackgroundImage } from "./styles";

const HomeScreen = ({ handleThemeChange }) => {
  const theme = useTheme();

  return (
    <Container>
      <BackgroundImage source={theme.background} resizeMode="cover">
        <AppNavigator />
        <Overlay />
        <Content>
          <Title>Your Fitness Buddy</Title>
          <Subtitle>With {theme.themeName}</Subtitle>
          <SearchBar />
          <Text style={{ marginTop: 16 }}>
            Selected Theme: {theme.themeName}
          </Text>
          <Text onPress={() => handleThemeChange("Arnold")}>Arnold</Text>
          <Text onPress={() => handleThemeChange("Ronnie")}>Ronnie</Text>
          <Text onPress={() => handleThemeChange("Cbum")}>Cbum</Text>
        </Content>
      </BackgroundImage>
    </Container>
  );
};

export default HomeScreen;
