import {useCallback, useEffect, useRef, useState} from 'react';
import CryptoModel from '@/models/CryptoModel';
import CryptoProvider from '@/providers/CriptoProvider';

const usePaginatedCryptos = () => {
  const [cryptos, setCryptos] = useState<CryptoModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const serviceRef = useRef<CryptoProvider | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    const init = async () => {
      if (initializedRef.current) return;

      const service = new CryptoProvider();
      await service.init();
      serviceRef.current = service;

      const {cryptos: initialCryptos, hasMore: moreAvailable} =
        await service.getNextCryptos();

      setCryptos(initialCryptos);
      setHasMore(moreAvailable);
      initializedRef.current = true;
    };

    init();
  }, []);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore || !serviceRef.current) return;

    setLoading(true);

    const {cryptos: newCryptos, hasMore: more} =
      await serviceRef.current.getNextCryptos();

    setCryptos(prev => [...prev, ...newCryptos]);
    setHasMore(more);
    setLoading(false);
  }, [loading, hasMore]);

  return {cryptos, loadMore, loading, hasMore};
};

export default usePaginatedCryptos;
