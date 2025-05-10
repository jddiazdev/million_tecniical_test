import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './stacks/navigation.stack';

const Navigaor = () => {
  return (
    <>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </>
  );
};

export default Navigaor;
