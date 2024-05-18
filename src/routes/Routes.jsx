import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PresentationScreen from '../Screens/PresentationScreen';
import CreateRecipeScreen from '../Screens/CreateRecipeScreen';
import MyRecipeScreen from '../Screens/MyRecipeScreen';

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
      <Stack.Screen name="CreateRecipeScreen" component={CreateRecipeScreen} />
      <Stack.Screen name="MyRecipeScreen" component={MyRecipeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
