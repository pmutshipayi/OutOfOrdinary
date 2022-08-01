import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStack } from './src/navigation';


const App = () => {

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
