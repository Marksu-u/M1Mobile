import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import { useTheme } from "styled-components/native";

import { fetchInspirationalQuotes } from "../../api/routes";

import SearchBar from "../../components/searchBar";
import Quote from "../../components/quote";

import { Container, Overlay, Content, Title, Subtitle, BackgroundImage } from "./styles";

const HomeScreen = () => {
  const theme = useTheme();
  const [quotes, setQuote] = useState([]);

  const fetchQuotes = async () => {
    const res = await fetchInspirationalQuotes();
    console.log(res);
    const quotesWithIds = res.map((quote, index) => {
      return { ...quote, id: index };
    });
    setQuote(quotesWithIds);
  };
  
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Container>
      <BackgroundImage source={theme.image} resizeMode="cover">
        <Overlay />
        <Content>
          <Title>Your Fitness Buddy</Title>
          <Subtitle>With {theme.title}</Subtitle>
          <SearchBar />
          {quotes.map((data) => {
            return <Quote key={data.id} author={data.author} quote={data.quote} />;
          })}
        </Content>
      </BackgroundImage>
    </Container>
  );
};

export default HomeScreen;
