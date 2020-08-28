import React from 'react';
import {Container, Text, ErrorText} from './styles';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';

interface ILoaderProps {
  locationError: boolean;
}

const Loader: React.FC<ILoaderProps> = ({locationError}) => {
  return (
    <Container>
      <Animatable.Text
        animation="pulse"
        easing="ease-in"
        iterationCount="infinite">
        <Icon name="cloud" color="white" size={200} />
      </Animatable.Text>
      <Text>CLOUDY</Text>
      {locationError && (
        <ErrorText>
          Location Error, please check your conection and try again
        </ErrorText>
      )}
    </Container>
  );
};

export default Loader;
