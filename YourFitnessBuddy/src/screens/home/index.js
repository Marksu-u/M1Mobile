import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { useTheme } from "styled-components/native";

import { fetchInspirationalQuotes } from "../../config/routes";

import SearchBar from "../../components/searchBar";
import AppNavigator from "../../components/appNavigator";

import { Container, Overlay, Content, Title, Subtitle, BackgroundImage, Quote } from "./styles";

const HomeScreen = () => {
  const theme = useTheme();
  const [fetchQuote, setQuote] = useState({});

  const fetchQuotes = async () => {
    const res = await fetchInspirationalQuotes();
    console.log(res.quote);
    setQuote(res);
  };
  

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <AppNavigator />
        <Overlay />
        <Content>
          <Title>Your Fitness Buddy</Title>
          <Subtitle>With {theme.title}</Subtitle>
          <SearchBar />
          <Button title="Refresh Quote" onPress={fetchQuotes} />
          <Quote>{fetchQuote.author}</Quote>
        </Content>
      </BackgroundImage>
    </Container>
  );
};

export default HomeScreen;


