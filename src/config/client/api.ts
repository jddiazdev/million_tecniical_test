import {API_URL, API_COINGECKO} from '@env';

export const ConfigApi = {
  API: {
    BASE_URL: API_URL ?? 'NOT-API',
    COINGECKO: API_COINGECKO ?? 'NOT-API',
    API_TICKERS: '/tickers',
    API_TICKERS_ID: '/ticker',
  },
};
