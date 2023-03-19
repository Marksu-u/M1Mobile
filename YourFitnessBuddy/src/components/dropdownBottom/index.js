import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

import { DropdownWrapper, DropdownButton, DropdownList, DropdownOption } from "./styles";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <DropdownWrapper>
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <DropdownButton>
          <Text>{options[0]}</Text>
        </DropdownButton>
      </TouchableWithoutFeedback>
      {isOpen && (
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <DropdownList>
            {options.map((option) => (
              <DropdownOption key={option} onPress={() => handleSelect(option)}>
                {option}
              </DropdownOption>
            ))}
          </DropdownList>
        </TouchableWithoutFeedback>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
