import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from "react-native-screens";
import Routes from './src/routes/routes';
import Home from './src/screens/Home';

export default function App() {
  enableScreens();

  return (
    <Home/> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
