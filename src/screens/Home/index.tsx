import React from 'react';
import { View, Button, Text } from 'react-native';

// import { Container } from './styles';


const Home = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home;D</Text>
    <Button 
      title="Ir para About"
      onPress={() => {} }
    />
  </View>
);


export default Home;