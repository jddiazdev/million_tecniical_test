import CryptoModel from '@/models/CryptoModel';
import {IBaseApi, ICoinGecko, ICryptoProvider, ITickers} from '@/types/index';
import {AxiosClient} from '@/config/client';
import {ConfigApi} from '@/config/client/api';
import CoinGeckoProvider from './CoinGeckoProvider';

const providerCrypto = new AxiosClient(ConfigApi.API.BASE_URL);

const coinGeckoProvider = new CoinGeckoProvider();

export default class CryptoProvider implements ICryptoProvider {
  private page: number = 0;
  private readonly pageSize: number = 20;
  private hasMore: boolean = true;
  private iconMap: Map<string, string> = new Map();

  async init(): Promise<void> {
    const filteredCoins: ICoinGecko[] =
      await coinGeckoProvider.getFilteredCoins();
    const iconM: Map<string, string> = new Map(
      filteredCoins.map(coin => {
        return [coin.symbol.toUpperCase(), coin.image];
      }),
    );
    this.iconMap = iconM;
  }
  async getNextCryptos(): Promise<{cryptos: CryptoModel[]; hasMore: boolean}> {
    try {
      const config = {
        url: `${ConfigApi.API.API_TICKERS}/?start=${
          this.page * this.pageSize
        }&limit=${this.pageSize}`,
        method: 'GET',
        showLoader: false,
      };
      const response = await providerCrypto.request<IBaseApi<ITickers[]>>(
        config,
      );

      const cryptosData = response.data.data;
      if (cryptosData && cryptosData.length < this.pageSize) {
        this.hasMore = false;
      }

      const cryptos = (cryptosData ?? []).map(item => {
        const image = this.iconMap.get(item.symbol.toUpperCase());
        return new CryptoModel({
          id: item.id,
          symbol: item.symbol,
          name: item.name,
          price_btc: item.price_btc,
          volume24a: item.volume24,
          price_usd: item.price_usd,
          url_image: image || '',
          nameid: item.nameid,
          rank: item.rank,
          percent_change_24h: item.percent_change_24h,
          percent_change_1h: item.percent_change_1h,
          percent_change_7d: item.percent_change_7d,
          market_cap_usd: item.market_cap_usd,
          volume24: item.volume24,
          csupply: item.csupply,
          tsupply: item.tsupply,
          msupply: item.msupply,
        });
      });

      this.page++;

      return {cryptos, hasMore: this.hasMore};
    } catch (error) {
      throw error;
    }
  }
}
