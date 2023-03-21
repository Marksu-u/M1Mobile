import React from "react";
import { Text } from "react-native";

import { ContainerQuote } from "./styles";

export default Quote = ({ author, quote }) => {
    return (
        <ContainerQuote>
            <Text>{quote}</Text>
            <Text>{author}</Text>
        </ContainerQuote>
    );
};