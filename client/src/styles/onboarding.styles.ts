import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  content: {
    alignItems: 'center',
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: colors.surface,
    marginBottom: 40,
    borderRadius: 100, // Circular
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: colors.primary,
  },
  desc: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.textSecondary,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 8,
    borderRadius: 30, // Rounded pill shape
  },
});