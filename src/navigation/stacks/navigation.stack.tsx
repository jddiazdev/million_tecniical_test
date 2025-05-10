import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation.params.stack';
import {screens} from '../navigations';

const Stack = createNativeStackNavigator<RootStackParams>();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screens.HomeScreen.name}
      screenOptions={{
        headerShadowVisible: false,
        orientation: 'portrait',
      }}>
      <Stack.Screen
        name={screens.HomeScreen.name}
        component={screens.HomeScreen.component}
        options={screens.HomeScreen.options}
      />
      <Stack.Screen
        name={screens.DetailCryptoScreen.name}
        component={screens.DetailCryptoScreen.component}
        options={screens.DetailCryptoScreen.options}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
