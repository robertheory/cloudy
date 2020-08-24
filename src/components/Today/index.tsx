import React from 'react';
import {
  Container,
  Title,
  DateContainer,
  Header,
  Sub,
  Temperature,
  Value,
  Location,
  Measure,
  Text,
  TextMinMax,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {kelvinToCelcius} from '../../utils/Conversor';

import IWeatherResponse from '../../models/IWeatherResponse';

interface IToday {
  weather: IWeatherResponse;
}

const Today: React.FC<IToday> = ({weather}) => {
  const date = new Date().toLocaleDateString();

  return (
    !!weather && (
      <Container>
        <Header>
          <Icon name="cloud-drizzle" color="white" size={30} />
          <DateContainer>
            <Title>Today</Title>
            <Sub>{date}</Sub>
          </DateContainer>
        </Header>
        <Temperature>
          <Value>{kelvinToCelcius(weather.main.temp)}</Value>
          <Measure>°C</Measure>
        </Temperature>
        <Text>
          Feels Like
          {' ' + kelvinToCelcius(weather.main.feels_like) + ' °C'}
        </Text>
        <TextMinMax>
          <Text>{'Min ' + kelvinToCelcius(weather.main.temp_min) + ' °C'}</Text>
          <Text>{'Max ' + kelvinToCelcius(weather.main.temp_max) + ' °C'}</Text>
        </TextMinMax>
        <Location>
          {weather.name} - {weather.sys.country}
        </Location>
      </Container>
    )
  );
};

export default Today;
