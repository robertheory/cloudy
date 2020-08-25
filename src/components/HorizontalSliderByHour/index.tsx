import React, {useState, useEffect} from 'react';
import {Safe, Container, Card, Hour, Temperature} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {kelvinToCelcius, normalizeDate} from '../../utils/Conversor';

import IWeatherResponse from '../../models/IOneCallApiResponse';
import IHourly from '../../models/IHourly';

interface IHorizontalSliderByHour {
  weather: IWeatherResponse;
}

const HorizontalSliderByHour: React.FC<IHorizontalSliderByHour> = ({
  weather,
}) => {
  const [hourly, setHourly] = useState<IHourly[]>();

  useEffect(() => {
    setHourly(weather.hourly);
  }, [weather]);

  return (
    !!weather && (
      <Safe>
        <Container horizontal showsHorizontalScrollIndicator={false}>
          {!!hourly &&
            hourly.map((hour) => (
              <Card key={hour.dt}>
                <Hour>{normalizeDate(hour.dt)}</Hour>

                <Icon name="cloud" color="white" size={25} />

                <Temperature>{kelvinToCelcius(hour.temp)}°C</Temperature>
              </Card>
            ))}
        </Container>
      </Safe>
    )
  );
};

export default HorizontalSliderByHour;
