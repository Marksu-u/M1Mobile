import React from "react";
import { Text, View } from "react-native";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";

import { Container, Overlay, Content, Title, Subtitle, BackgroundImage } from "../../global/styles/global.styles";

export default FavoritesScreen = ({ navigation }) => {
    const theme = useTheme();

    return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <Overlay />
        <Content>
        
        </Content>
        </BackgroundImage>
        <AppNavigator navigation={navigation} />
    </Container>
    );
}