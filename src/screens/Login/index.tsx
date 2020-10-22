import React from 'react';
import { View, Text} from 'react-native';
import { useNavigation, useRoute, NavigationHelpersContext } from '@react-navigation/native';
import { Container } from './styles';

const Login: React.FC = () => {
  return (
  <Container>
  <Text>
    Olá Mundo
  </Text>
  </Container>
  ); 
}

export default Login;