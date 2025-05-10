import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export const Row = ({
  label,
  value,
  positive = false,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) => {
  const isNegative = value.startsWith('-');
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[
          styles.value,
          {color: isNegative ? 'red' : positive ? 'green' : '#000'},
        ]}>
        {value}
      </Text>
    </View>
  );
};
