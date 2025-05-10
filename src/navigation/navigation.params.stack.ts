import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ComponentType} from 'react';

import CryptoModel from '@/models/CryptoModel';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailCryptoScreen: {
    item: CryptoModel;
  };
};

export type AppNavigationParams = RootStackParams;

export interface PageConfig {
  name: keyof AppNavigationParams;
  component: ComponentType<any>;
  options?: NativeStackNavigationOptions;
}

export type ScreensConfig = {
  [key in keyof AppNavigationParams]: PageConfig;
};

export type ScreenName = keyof AppNavigationParams;
