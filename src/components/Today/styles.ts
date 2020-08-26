import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  color: white;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateContainer = styled.View`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const WeatherIcon = styled.Image`
  width: 50;
  height: 50;
`;

export const Title = styled.Text`
  color: white;
  font-size: 30px;
`;

export const Sub = styled.Text`
  color: white;
  font-size: 15px;
`;

export const Temperature = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const Value = styled.Text`
  color: white;
  font-size: 90px;
`;

export const Measure = styled.Text`
  color: white;
  font-size: 30px;
  transform: translateY(20px);
`;

export const Location = styled.Text`
  color: white;
  font-size: 20px;
`;

export const TextMinMax = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
  padding: 5px;
`;
