import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
});
