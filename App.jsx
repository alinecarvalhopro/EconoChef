import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Routes';

export const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Jost-Light': require('./assets/fonts/Jost/Jost-Light.ttf'),
        'Jost-Regular': require('./assets/fonts/Jost/Jost-Regular.ttf'),
        'Jost-Medium': require('./assets/fonts/Jost/Jost-Medium.ttf'),
        'Jost-SemiBold': require('./assets/fonts/Jost/Jost-SemiBold.ttf'),
        'Jost-Bold': require('./assets/fonts/Jost/Jost-Bold.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

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
