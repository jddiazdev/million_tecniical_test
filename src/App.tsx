/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigaor from './navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigaor />
    </SafeAreaProvider>
  );
}

export default App;
