import {AxiosClient} from '@/config/client';
import {ConfigApi} from '@/config/client/api';
import {ICoinGecko, ICoinGeckoProvider} from '@/types/index';

const providerCoins = new AxiosClient(ConfigApi.API.COINGECKO);

export default class CoinGeckoProvider implements ICoinGeckoProvider {
  async getFilteredCoins(): Promise<ICoinGecko[]> {
    try {
      const config = {
        url: '/coins/markets?vs_currency=usd',
        method: 'GET',
        showLoader: false,
      };
      const response = await providerCoins.request<ICoinGecko[]>(config);

      return response.data.map((coin: ICoinGecko) => ({
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
      }));
    } catch (error) {
      throw error;
    }
  }
}
