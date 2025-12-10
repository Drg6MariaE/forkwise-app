import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const goalsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.background,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginVertical: 20,
    justifyContent: 'center',
  },
  chip: {
    margin: 4,
    backgroundColor: colors.surface,
  },
  chipSelected: {
    backgroundColor: colors.primary, // Highlight color when selected
  },
  button: {
    marginTop: 32,
    paddingVertical: 6,
    borderRadius: 8,
  }
});