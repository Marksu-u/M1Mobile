import React from "react";
import { Text, View } from "react-native";

import SearchBar from "../../components/searchBar";

import { Container, BackgroundImage, Overlay, Content, Title, Subtitle } from "./styles";

const image = require("../../../src/images/fitnessBuddy.jpg");

const HomeScreen = () => (
  <Container>

    <BackgroundImage source={image}>
      <Overlay />
      <Content>
        <Title>Your Fitness Buddy</Title>
        <Subtitle>With Ronnie Coleman</Subtitle>
        <SearchBar />
      </Content>
    </BackgroundImage>
  </Container>
);

export default HomeScreen;