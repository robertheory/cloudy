import React from 'react';
import {Container, Header, Button, Text} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import HorizontalSlider from '../HorizontalSliderByHour';

const Today = () => {
  return (
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
      <HorizontalSlider />
    </Container>
  );
};

export default Today;
