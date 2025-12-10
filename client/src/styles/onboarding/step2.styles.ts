import { StyleSheet } from 'react-native';

export const step2Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center',
    padding: 20,
  },
  circleDecoration: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E0F7FA', 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#006064',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#555',
    lineHeight: 28,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
  },
  button: {
    padding: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#006064',
  }
});