import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface StepProps {
  onFinish: () => void;
  onBack: () => void;
}

export default function Step3({ onFinish, onBack }: StepProps) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FF9600', '#FF5E62']} style={styles.header}>
        <Text style={styles.headText}>Ready?</Text>
      </LinearGradient>
      
      <View style={styles.content}>
        <Text style={styles.title}>Reach Your Goals</Text>
        <Text style={styles.desc}>Let's get you set up for success.</Text>
      </View>

      <TouchableOpacity onPress={onFinish} style={styles.mainButton}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onBack} style={{ marginTop: 20 }}>
        <Text style={{ color: '#888' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
  header: { width: '100%', height: 250, justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 50 },
  headText: { fontSize: 40, color: 'white', fontWeight: 'bold' },
  content: { marginTop: 50, padding: 20, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold' },
  desc: { fontSize: 16, marginTop: 10, color: '#666' },
  mainButton: { marginTop: 50, backgroundColor: '#FF5E62', paddingVertical: 15, paddingHorizontal: 50, borderRadius: 25 },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});