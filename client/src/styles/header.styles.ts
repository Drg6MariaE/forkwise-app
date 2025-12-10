import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  head: {
    backgroundColor: '#C2D74D',
    width: '100%',
    height: 165,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 138,
    height: 138,
    resizeMode: 'contain',
    marginTop: 10,
  },
});