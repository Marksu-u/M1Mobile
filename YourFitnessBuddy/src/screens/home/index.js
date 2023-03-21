import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { useTheme } from "styled-components/native";

import { fetchInspirationalQuotes } from "../../api/routes";

import SearchBar from "../../components/searchBar";
import AppNavigator from "../../components/appNavigator";
import Quote from "../../components/quote";

import { Container, Overlay, Content, Title, Subtitle, BackgroundImage } from "./styles";

const HomeScreen = () => {
  const theme = useTheme();
  const [quotes, setQuote] = useState([]);

  const fetchQuotes = async () => {
    const res = await fetchInspirationalQuotes();
    console.log(res);
    setQuote(res);
    console.log("res : ", quotes);
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
          {quotes.map((data) => {
            return <Quote author={data.author} quote={data.quote} />;
          })}
        </Content>
      </BackgroundImage>
    </Container>
  );
};

export default HomeScreen;


