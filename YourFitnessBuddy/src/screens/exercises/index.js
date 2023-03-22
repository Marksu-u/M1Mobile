import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { useTheme } from "styled-components/native";

import AppNavigator from "../../components/appNavigator";
import { fetchExercises, fetchExercisesByMuscle } from "../../api/routes";

import SearchBar from "../../components/searchBar";
import Card from "../../components/card";

import { Container, Overlay, Content, Title, BackgroundImage } from "../../global/styles/global.styles";

export default ExercisesScreen = ({ navigation }) => {
    const theme = useTheme();
    const [exercises, setExercises] = useState([]);

    const handleSearchResults = (results) => {
      setExercises(results);
    };    

    useEffect(() => {
      const fetchExercisesData = async () => {
        const data = await fetchExercises();
        console.log(data);
        setExercises(data);
      };
    
      fetchExercisesData();
    }, []);
    

    return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <Overlay />
        <Content>
          <Title>Let's Get You Jacked !</Title>
          <SearchBar onSearch={handleSearchResults} />
          {exercises.map((exercise) => {
            return <Card key={exercise.id} name={exercise.name} type={exercise.type} muscle={exercise.muscle} equipment={exercise.equipment} difficulty={exercise.difficulty} instructions={exercise.instructions} />;
          })}
        </Content>
        </BackgroundImage>
        <AppNavigator navigation={navigation} />
    </Container>

    );
}