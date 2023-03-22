import React from 'react';

import { CardContainer, Header, Type, Title, Subtitle, Body, Instructions } from '../../global/styles/global.styles';

export const Card = ({ name, type, muscle, equipment, difficulty, instructions }) => {
  return (
    <CardContainer>
      <Header>
        <Title>{name}</Title>
        <Type>{type}</Type>
      </Header>
      <Body>
        <Subtitle>Muscle: {muscle}</Subtitle>
        <Subtitle>Equipment: {equipment}</Subtitle>
        <Subtitle>Difficulty: {difficulty}</Subtitle>
        <Instructions>{instructions}</Instructions>
      </Body>
    </CardContainer>
  );
};