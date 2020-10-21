import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {RouteConstants} from "../shared/constants/RouteConstants"
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Home from "../screens/Home"

const AppStack = createNativeStackNavigator();


const Routes: React.FC = () => {

    return (
        
        <NavigationContainer>
            <AppStack.Navigator initialRouteName={RouteConstants.HOME} screenOptions={{}}>

            <AppStack.Screen name={RouteConstants.HOME} component={Home} options={{headerShown: false}}/>
    
            
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;
