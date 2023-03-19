import { View, Text } from "react-native";
import styled from "styled-components/native";

export const DropdownWrapper = styled(View)`
  position: relative;
  width: 200px;
`;

export const DropdownButton = styled(View)`
  height: 40px;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  padding-horizontal: 8px;
`;

export const DropdownList = styled(View)`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  padding: 8px;
`;

export const DropdownOption = styled(Text)`
  font-size: 16px;
  padding-vertical: 8px;
`;