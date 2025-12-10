import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "flex-start",
  },

  inputsContainer: {
    justifyContent: "center",
    padding: 16,
  },
  intro: {
    alignItems: "center",
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#000000",
    marginTop: 16,
    width: "80%",
    letterSpacing: 0.5,
    paddingHorizontal: 8,
  },
  subtitle2: {
    fontSize: 14,
    textAlign: "left",
    color: "#666",
    marginTop: 16,
    width: "80%",
    letterSpacing: 0.5,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "#FF9600",
    marginTop: 15,
    shadowColor: "#FF9600",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  txtButton: {
    color: "black",
    
  },
  input: {
    backgroundColor: "white",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  form: {
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});