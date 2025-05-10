import {DetailCryptoScreen, HomeScreen} from '@/screens/screens';
import {ScreensConfig} from './navigation.params.stack';

export const screens: ScreensConfig = {
  HomeScreen: {
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  DetailCryptoScreen: {
    name: 'DetailCryptoScreen',
    component: DetailCryptoScreen,
    options: {
      headerShown: false,
    },
  },
};
