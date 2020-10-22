import React from 'react';
import { Main, MainText, MainButton } from './styles';
import { useNavigation, useRoute, NavigationHelpersContext } from '@react-navigation/native';
import { View, Button, Text } from 'react-native';
import { RouteConstants } from '../../shared/constants/RouteConstants';



 const Home: React.FC = () => {
  const navigation = useNavigation()
  
  function OnPressMainRoute(){
   navigation.navigate(RouteConstants.LOGIN)

  }
  
  return( 
  <Main>
  <MainButton
    testID="main-button"
    accessibilityLabel="main-button"
    onPress={OnPressMainRoute}
  >
  <MainText>Autowäsche</MainText>
   </MainButton> 
  </Main>
    
  );  
}

export default Home;

