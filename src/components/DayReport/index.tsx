import React from 'react';
import {Container, Header, Button, Text} from './styles';
import HorizontalSlider from '../HorizontalSlider';

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
            <Text>Next Days</Text>
          </Button>
        </Header>
        <HorizontalSlider weather={weather} />
      </Container>
    )
  );
};

export default DayReport;
