import React, {useState, useEffect} from 'react';
import {
  Container,
  Title,
  DateContainer,
  Header,
  Sub,
  Temperature,
  Value,
  Location,
  LocationContainer,
  Measure,
  Text,
  WeatherIcon,
} from './styles';
import {kelvinToCelcius} from '../../utils/Conversor';
import {GeolocationResponse} from '@react-native-community/geolocation';
import axios from 'axios';
import {geolocationKey} from '../../config/api';

import IWeatherResponse from '../../models/IOneCallApiResponse';
import IGeolocationData from '../../models/IGeolocationData';

interface IToday {
  weather: IWeatherResponse;
  location: GeolocationResponse;
}

const Today: React.FC<IToday> = ({weather, location}) => {
  const [local, setLocal] = useState<IGeolocationData | null>();

  useEffect(() => {
    axios
      .get<IGeolocationData | null>(
        `https://api.opencagedata.com/geocode/v1/json?q=${location.coords.latitude}+${location.coords.longitude}&key=${geolocationKey}`,
      )
      .then((response) => {
        setLocal(response.data);
      });
  }, [location.coords.latitude, location.coords.longitude]);

  const date = new Date().toLocaleDateString();

  return (
    !!weather && (
      <Container>
        <Header>
          <WeatherIcon
            source={{
              uri: `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}.png`,
            }}
          />
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
        <LocationContainer>
          <Location>
            {local?.results[0].components.suburb ||
              local?.results[0].components.city ||
              ''}
            {(!!local?.results[0].components.suburb && ' - ') ||
              (!!local?.results[0].components.city && ' - ')}
          </Location>
          <Location>
            {local?.results[0].components.state_code || ''}
            {!!local?.results[0].components.state_code && ' - '}
          </Location>
          <Location>{local?.results[0].components.country || ''}</Location>
        </LocationContainer>
      </Container>
    )
  );
};

export default Today;
