import React from "react";
import { Text, View } from "react-native";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";
import { fetchExercices, fetchExercicesByMuscle } from "../../api/routes";

import SearchBar from "../../components/searchBar";

import { Container, Overlay, Content, Title, Subtitle, BackgroundImage } from "../../global/styles/global.styles";

export default ExercisesScreen = ({ navigation }) => {
    const theme = useTheme();

    return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <Overlay />
        <Content>
          <Title>Let's Get You Jacked !</Title>
          <SearchBar />
        
        </Content>
        </BackgroundImage>
        <AppNavigator navigation={navigation} />
    </Container>

    );
}