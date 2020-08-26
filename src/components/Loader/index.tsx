import React from 'react';
import {Container, Text} from './styles';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';

const Loader = () => {
  return (
    <Container>
      <Animatable.Text
        animation="pulse"
        easing="ease-in"
        iterationCount="infinite">
        <Icon name="cloud" color="white" size={200} />
      </Animatable.Text>
      <Text>CLOUDY</Text>
    </Container>
  );
};

export default Loader;
