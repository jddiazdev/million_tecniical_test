import CryptoModel from '@/models/CryptoModel';

export interface ITickers {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
  url_image?: string;
}

export interface ICryptoProvider {
  init(): Promise<void>;
  getNextCryptos(): Promise<{cryptos: CryptoModel[]; hasMore: boolean}>;
}

export interface IBaseApi<T> {
  data?: T;
  info: Info;
}

export interface Info {
  coins_num: number;
  time: number;
}

export interface ICoinGecko {
  id: string;
  symbol: string;
  name: string;
  image: string;
}

export interface ICoinGeckoProvider {
  getFilteredCoins(): Promise<ICoinGecko[]>;
}
