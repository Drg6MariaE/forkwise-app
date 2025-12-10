import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CongratsScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
     
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>🎉</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>All Set!</Text>
      <Text>Preparing your dashboard...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0f7fa' }
});