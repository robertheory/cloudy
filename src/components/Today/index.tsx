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
  // TextMinMax,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {kelvinToCelcius} from '../../utils/Conversor';

import IWeatherResponse from '../../models/IOneCallApiResponse';

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
          <Value>{kelvinToCelcius(weather.current.temp)}</Value>
          <Measure>°C</Measure>
        </Temperature>
        <Text>
          {'Feels Like ' + kelvinToCelcius(weather.current.feels_like) + ' °C'}
        </Text>
        {/* <TextMinMax> */}
        <Text>{'Humidity ' + weather.current.humidity + '%'}</Text>
        <Text>{'Pressure ' + weather.current.pressure + ' hPa'}</Text>
        <Text>{'Wind Speed ' + weather.current.wind_speed + ' km/h'}</Text>
        {/* </TextMinMax> */}
        <Location>{weather.timezone}</Location>
      </Container>
    )
  );
};

export default Today;
