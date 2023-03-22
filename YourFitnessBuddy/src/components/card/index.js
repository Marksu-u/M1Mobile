import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity, Text } from 'react-native';

import { CardContainer, Header, Type, Title, Subtitle, Body, Instructions, FavoriteButton } from './styles';

const Card = ({ name, type, muscle, equipment, difficulty, instructions }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = async () => {
    const key = `favorite_${name}`;
    const storedValue = await AsyncStorage.getItem(key);

    if (storedValue) {
      await AsyncStorage.removeItem(key);
      setIsFavorite(false);
    } else {
      await AsyncStorage.setItem(key, JSON.stringify({ name, type, muscle, equipment, difficulty, instructions }));
      setIsFavorite(true);
    }
  };

  return (
    <CardContainer>
      <Header>
        <Title>{name}<Type> - {type}</Type></Title>
      </Header>
      <Body>
        <Subtitle>Muscle: {muscle}</Subtitle>
        <Subtitle>Equipment: {equipment}</Subtitle>
        <Subtitle>Difficulty: {difficulty}</Subtitle>
        <Instructions>{instructions}</Instructions>
      </Body>
      <TouchableOpacity onPress={handleFavorite}>
        <Text>Add to Favorites</Text>
      </TouchableOpacity>
    </CardContainer>
  );

};

export default Card;
