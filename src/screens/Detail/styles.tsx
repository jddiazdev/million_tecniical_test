import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.03,
  },
  containerHeader: {
    padding: width * 0.05,
    backgroundColor: '#fff',
    borderRadius: width * 0.03,
    marginBottom: height * 0.02,
    borderWidth: 1,
    borderColor: '#eee',
  },

  card: {
    backgroundColor: '#fafafa',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.015,
    borderRadius: width * 0.03,
    marginBottom: height * 0.02,
    borderWidth: 1,
    borderColor: '#eee',
  },

  sectionTitle: {
    fontSize: width * 0.035,
    fontWeight: '600',
    color: '#1a2a5b',
    marginBottom: height * 0.015,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },

  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
  },

  icon: {
    width: width * 0.12,
    height: width * 0.12,
  },

  label: {
    fontSize: width * 0.035,
    color: '#555',
  },

  value: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#000',
  },

  backButton: {
    marginTop: height * 0.02,
    paddingVertical: height * 0.015,
    backgroundColor: '#1a2a5b',
    borderRadius: width * 0.025,
    alignItems: 'center',
  },

  backButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
});

export default styles;
