import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PresentationScreen from '../Screens/PresentationScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="PresentationScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PresentationScreen" component={PresentationScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
