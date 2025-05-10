import {ITickers} from '@/types/index';

export default class CryptoModel {
  private id: string;
  private symbol: string;
  private name: string;
  private nameId: string;
  private rank: number;
  private priceUsd: string;
  private percentChange1h: string;
  private percentChange24h: string;
  private percentChange7d: string;
  private priceBtc: string;
  private marketCapUsd: string;
  private volume24: number;
  private volume24a: number;
  private csupply: string;
  private tsupply: string;
  private msupply: string;
  private imageUrl?: string;

  constructor(data: ITickers) {
    this.id = data.id;
    this.symbol = data.symbol;
    this.name = data.name;
    this.nameId = data.nameid;
    this.rank = data.rank;
    this.priceUsd = data.price_usd;
    this.percentChange1h = data.percent_change_1h;
    this.percentChange24h = data.percent_change_24h;
    this.percentChange7d = data.percent_change_7d;
    this.priceBtc = data.price_btc;
    this.marketCapUsd = data.market_cap_usd;
    this.volume24 = data.volume24;
    this.volume24a = data.volume24a;
    this.csupply = data.csupply;
    this.tsupply = data.tsupply;
    this.msupply = data.msupply;
    this.imageUrl = data.url_image;
  }

  public getId(): string {
    return this.id;
  }

  public getSymbol(): string {
    return this.symbol;
  }

  public getName(): string {
    return this.name;
  }

  public getDisplayName(): string {
    return `${this.name} (${this.symbol})`;
  }

  public getNameId(): string {
    return this.nameId;
  }

  public getRank(): number {
    return this.rank;
  }

  public getPriceUsd(): string {
    return this.priceUsd;
  }

  public getFormattedPrice(): string {
    return this.priceUsd;
  }

  public getChange1h(): string {
    return this.percentChange1h;
  }

  public getChange24h(): string {
    return this.percentChange24h;
  }

  public getChange7d(): string {
    return this.percentChange7d;
  }

  public getPriceBtc(): string {
    return this.priceBtc;
  }

  public getMarketCap(): string {
    return this.marketCapUsd;
  }

  public getVolume24(): number {
    return this.volume24;
  }

  public getVolume24a(): number {
    return this.volume24a;
  }
  public getCsupply(): string {
    return this.csupply;
  }
  public getTsupply(): string {
    return this.tsupply;
  }
  public getMsupply(): string {
    return this.msupply;
  }

  public getImageUrl(): string | undefined {
    return this.imageUrl;
  }

  public getFormattedChange24h(): string {
    const change = parseFloat(this.percentChange24h);
    return `${change > 0 ? '+' : ''}${change.toFixed(2)}%`;
  }

  public hasImage(): boolean {
    return !!this.imageUrl;
  }
}
