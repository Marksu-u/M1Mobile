import React from "react";
import { Text, View, Image } from "react-native";
import { useTheme } from "styled-components/native";

import SearchBar from "../../components/searchBar";
import AppNavigator from "../../components/appNavigator";

import { Container, Overlay, Content, Title, Subtitle, BackgroundImage, Quote } from "./styles";

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <AppNavigator />
        <Overlay />
        <Content>
          <Title>Your Fitness Buddy</Title>
          <Subtitle>With {theme.title}</Subtitle>
          <SearchBar />
          <Quote>{theme.motivation}</Quote>
        </Content>
      </BackgroundImage>
    </Container>
  );
};

export default HomeScreen;
