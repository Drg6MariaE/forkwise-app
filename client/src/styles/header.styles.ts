import { StyleSheet } from 'react-native';
import { colors } from './colors';

// We use the light theme as the default for the static stylesheet
const defaultTheme = colors.light;

export const headerStyles = StyleSheet.create({
  head: {
    width: '100%',
    height: 150,
    // These defaults will be overridden by your dynamic styles in the component
    backgroundColor: defaultTheme.secondary, 
    shadowColor: defaultTheme.textPrimary, 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // Add border radius if you want the header to be rounded at the bottom
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
  },
  logoImage: {
    width: 138,
    height: 138,
    resizeMode: 'contain',
    marginTop: 10, // 'top' works, but marginTop is safer for layout
  },
});