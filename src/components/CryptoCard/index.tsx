import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

import CryptoModel from '@/models/CryptoModel';
import {formatUSD} from '@/utils';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '@/navigation/navigation.params.stack';

interface Props {
  item: CryptoModel;
  navigation?: StackNavigationProp<RootStackParams, 'HomeScreen'>;
}

export const CryptoCard = ({item, navigation}: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation ? navigation.push('DetailCryptoScreen', {item: item}) : null
      }>
      {item.getImageUrl() ? (
        <Image source={{uri: item.getImageUrl()}} style={styles.icon} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <View style={{marginLeft: 15}}>
        <Text style={styles.name}>{item.getDisplayName()}</Text>
        <Text style={styles.price}>{`${formatUSD(
          item.getFormattedPrice(),
        )} USD`}</Text>
      </View>
    </TouchableOpacity>
  );
};
