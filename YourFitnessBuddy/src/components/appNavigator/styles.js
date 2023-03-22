import styled from 'styled-components/native';

export const NavContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: black;
  padding: 0 20px;
`;

export const NavButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: black;
`;

export const NavButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
