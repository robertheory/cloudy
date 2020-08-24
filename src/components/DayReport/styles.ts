import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 20px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #a7a7a7;
`;
