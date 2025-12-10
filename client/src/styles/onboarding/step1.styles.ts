import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const step1Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgCircle1: {
    position: "absolute",
    width: 450,
    height: 450,
    borderRadius: 355,
    backgroundColor: "#FF9600",
    shadowColor: "#FF9600",
    shadowOpacity: 0.9,
    shadowRadius: 80,
    elevation: 6,
    top: -90,
    left: -90,
  },
  bgCircle2: {
    position: "absolute",
    width: 300,
    height: 280,
    borderRadius: 155,
    backgroundColor: "#C2D74D",
    shadowColor: "#C2D74D",
    shadowOpacity: 10,
    shadowRadius: 100,
    elevation: 6,
    bottom: 95,
    right: -25,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    zIndex: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    color: '#000',
    marginBottom: 10,
    fontFamily: 'System', 
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    lineHeight: 22,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});