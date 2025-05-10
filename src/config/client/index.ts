import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import useSWR, {SWRConfiguration, SWRResponse} from 'swr';
import {ConfigApi} from './api';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  showLoader?: boolean;
}

export class AxiosClient {
  private api: AxiosInstance;

  constructor(private baseURL: string) {
    this.api = axios.create({
      baseURL: this.baseURL,
      timeout: 30000, // 30 segundos
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.handleRequestError = this.handleRequestError.bind(this);
    this.handleResponseError = this.handleResponseError.bind(this);

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.api.interceptors.request.use(
      async config => {
        return this.handleRequest(config as CustomAxiosRequestConfig);
      },
      error => this.handleRequestError(error),
    );

    this.api.interceptors.response.use(
      response => this.handleResponse(response),
      error => this.handleResponseError(error),
    );
  }

  private async handleRequest(
    config: CustomAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> {
    if (config?.showLoader) {
      console.log('🔹 Mostrando loader desde interceptor...');
    }

    const token = null;
    if (token !== null) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config as InternalAxiosRequestConfig;
  }

  private async handleRequestError(error: any) {
    console.error('❌ Axios Request Error:', error?.message || error);

    return Promise.reject(new Error(error?.message || 'Request failed'));
  }

  private async handleResponse(response: AxiosResponse) {
    return response;
  }

  private async handleResponseError(error: AxiosError) {
    return Promise.reject(new Error(error?.message || 'Response failed'));
  }

  public request<T>(config: CustomAxiosRequestConfig) {
    return this.api.request<T>(config);
  }

  public fetcher<T>(
    url: string,
    config?: CustomAxiosRequestConfig,
  ): Promise<T> {
    return this.api.get<T>(url, config).then(res => res.data);
  }
}

export const useAxiosClient = (baseURL: string) => {
  return new AxiosClient(baseURL);
};

export const useSWRRequest = <T>(
  key: string,
  baseURL?: string,
  displayLoader?: boolean,
  swrOptions?: SWRConfiguration,
): SWRResponse<T, any> => {
  const axiosClient = useAxiosClient(baseURL ?? ConfigApi.API.BASE_URL);
  return useSWR<T>(
    key,
    () => axiosClient.fetcher<T>(key, {showLoader: displayLoader}),
    swrOptions,
  );
};
