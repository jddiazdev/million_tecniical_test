import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import styles from './styles';

interface ILoader {
  show: boolean;
}

export const Loader = (props: ILoader) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={props.show}
      presentationStyle="overFullScreen">
      <View style={styles.modalContainer}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};
