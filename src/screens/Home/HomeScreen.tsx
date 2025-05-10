import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Loader} from '@/components/Loader';
import {CryptoCard} from '@/components';
import Search from '@/components/Search';
import usePaginatedCryptos from '@/hooks/usePaginatedCryptos';
import {RootStackParams} from '@/navigation/navigation.params.stack';
import styles from './styles';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const {cryptos, loadMore, loading, hasMore} = usePaginatedCryptos();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const filteredCryptos = cryptos.filter(crypto =>
    crypto
      .getDisplayName()
      .toLowerCase()
      .includes(debouncedQuery.toLowerCase()),
  );

  const handleEndReached = () => {
    if (!loading && hasMore) {
      loadMore();
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.title}>Criptomonedas</Text>
      <Search value={query} onChange={setQuery} />
      <FlatList
        data={filteredCryptos}
        keyExtractor={item => item.getId().toString()}
        renderItem={({item}) => (
          <CryptoCard item={item} navigation={navigation} />
        )}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading ? <Loader show /> : null}
      />
    </SafeAreaView>
  );
};
