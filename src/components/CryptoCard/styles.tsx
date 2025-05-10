import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.02,
  },
  icon: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.04,
  },
  placeholder: {
    width: width * 0.05,
    height: width * 0.08,
    borderRadius: width * 0.04,
    backgroundColor: '#eee',
  },
  name: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  price: {
    color: '#555',
    fontSize: width * 0.04,
  },
});
