import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    backgroundColor: '#f1f1f1',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: 8,
    fontSize: width < 380 ? 14 : 16,
    ...Platform.select({
      android: {
        paddingVertical: height * 0.013,
      },
    }),
  },
});
