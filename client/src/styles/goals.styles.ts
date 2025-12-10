import { StyleSheet } from 'react-native';

export const goalsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
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
 
  },
  chipSelected: {
 
  },
  button: {
    marginTop: 32,
    paddingVertical: 6,
    borderRadius: 8,
  }
});