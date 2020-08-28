import React, {useEffect, useState} from 'react';
import {
  Container,
  Title,
  TitleText,
  RefreshIcon,
  RefreshButton,
  Logo,
} from './styles';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Alert} from 'react-native';

import api from '../../services/api';

import Today from '../../components/Today';
import DayReport from '../../components/DayReport';
import Loader from '../../components/Loader';
import {weatherKey} from '../../config/api';

import IWeatherResponse from '../../models/IOneCallApiResponse';

const Home: React.FC | any = () => {
  const [weather, setWeather] = useState<IWeatherResponse | null>();
  const [location, setLocation] = useState<GeolocationResponse | null>();
  const [locationError, setLocationError] = useState<boolean>(false);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        api
          .get<IWeatherResponse | null>(
            `/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${weatherKey}`,
          )
          .then((response) => {
            setWeather(response.data);
            setLocation(position);
          })
          .catch(() => setLocationError(true));
      },
      (error) => {
        Alert.alert('Location error', `${(error.code, error.message)}`);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, [location]);

  return !weather || !location ? (
    <Loader locationError={locationError} />
  ) : (
    <Container>
      <RefreshButton
        onPress={() => {
          setLocation(null);
        }}>
        <RefreshIcon name="refresh-cw" size={25} />
      </RefreshButton>
      <Title>
        <Logo name="cloud" />
        <TitleText>Cloudy</TitleText>
      </Title>
      <Today weather={weather} location={location} />
      <DayReport weather={weather} />
    </Container>
  );
};

export default Home;
