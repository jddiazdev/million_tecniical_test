import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootStackParams} from '@/navigation/navigation.params.stack';
import {formatUSD} from '@/utils';
import {Row} from '@/components/index';
import styles from './styles';

interface Props
  extends StackScreenProps<RootStackParams, 'DetailCryptoScreen'> {}

export const DetailCryptoScreen = ({navigation, route}: Props) => {
  const {params} = route;
  const item = params?.item;

  console.log(item);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.getDisplayName()}</Text>
          <Image source={{uri: item.getImageUrl()}} style={styles.icon} />
        </View>
        <View style={styles.statItem}>
          <Text style={styles.label}>Price (USD)</Text>
          <Text style={styles.value}>{formatUSD(item.getPriceUsd())}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>CAMBIOS DE PRECIOS</Text>
        <Row label="1h" value={item.getChange1h()} />
        <Row label="24h" value={item.getChange24h()} />
        <Row label="7d" value={item.getChange7d()} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>MARKET DATA</Text>
        <Row label="Market Cap" value={formatUSD(item.getMarketCap())} />
        <Row label="24h Volume" value={item.getVolume24().toString()} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>SUPPLY</Text>
        <Row label="Circulating" value={item.getCsupply()} />
        <Row label="Total Supply" value={item.getTsupply()} />
        <Row label="Max Supply" value={item.getMsupply()} />
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
