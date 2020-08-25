import React from 'react';
import {Container, Header, Button, Text} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import HorizontalSlider from '../HorizontalSliderByHour';

import IWeatherResponse from '../../models/IOneCallApiResponse';

interface IDayReport {
  weather: IWeatherResponse;
}

const DayReport: React.FC<IDayReport> = ({weather}) => {
  return (
    !!weather && (
      <Container>
        <Header>
          <Button>
            <Text>Today</Text>
          </Button>
          <Button>
            <Text>Tomorrow</Text>
          </Button>
          <Button>
            <Text>Next 7 Days</Text>
            <Icon name="chevron-right" color="white" size={28} />
          </Button>
        </Header>
        <HorizontalSlider weather={weather} />
      </Container>
    )
  );
};

export default DayReport;
