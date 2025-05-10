// src/components/SearchBar.tsx
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export default function Search({value, onChange}: Props) {
  const handleChange = (text: string) => {
    onChange(text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar crypto..."
        value={value}
        onChangeText={handleChange}
        style={styles.input}
      />
    </View>
  );
}
