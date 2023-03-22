import React from "react";
import { NavButton, NavContainer, NavButtonText } from "./styles";

const AppNavigator = ({ navigation }) => {

  const handleNav = ( page ) => {
    navigation.navigate(page);
  };

  return (
    <NavContainer>
      <NavButton onPress={() => handleNav('home')}>
        <NavButtonText>Home</NavButtonText>
      </NavButton>
      <NavButton onPress={() => handleNav('exercises')}>
        <NavButtonText>Exercises</NavButtonText>
      </NavButton>
      <NavButton onPress={() => handleNav('favorites')}>
        <NavButtonText>Favorites</NavButtonText>
      </NavButton>
    </NavContainer>
  );
};

export default AppNavigator;
