import React, { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';

const loadFonts = async () => {
  await Font.loadAsync({
    'Jost-Light': require('./assets/fonts/Jost/Jost-Light.ttf'),
    'Jost-Regular': require('./assets/fonts/Jost/Jost-Regular.ttf'),
    'Jost-Medium': require('./assets/fonts/Jost/Jost-Medium.ttf'),
    'Jost-SemiBold': require('./assets/fonts/Jost/Jost-SemiBold.ttf'),
    'Jost-Bold': require('./assets/fonts/Jost/Jost-Bold.ttf'),
  });
}

export const App = () => {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="#748D7B" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
