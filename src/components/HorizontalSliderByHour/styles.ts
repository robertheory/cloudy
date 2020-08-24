import styled from 'styled-components/native';

export const Safe = styled.SafeAreaView`
  width: 100%;
`;

export const Container = styled.ScrollView`
  width: 100%;
  margin-top: 20px;
`;

export const Card = styled.View`
  background-color: #011d49;
  border: 1px solid white;
  border-radius: 40px;
  padding: 10px;
  margin: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

export const Hour = styled.Text`
  color: #c5c5c5;
`;

export const Temperature = styled.Text`
  color: white;
`;
