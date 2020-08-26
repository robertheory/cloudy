import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  color: white;
`;

export const Title = styled.View`
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const Logo = styled(Icon)`
  color: white;
  font-size: 20px;
  margin-right: 10px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 14px;
`;

export const RefreshIcon = styled(Icon)`
  color: white;
`;

export const RefreshButton = styled.TouchableOpacity`
  padding: 5px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  border: 1px solid white;
  border-radius: 3px;
`;

export const Loader = styled.Text`
  color: white;
  font-size: 20px;
`;
