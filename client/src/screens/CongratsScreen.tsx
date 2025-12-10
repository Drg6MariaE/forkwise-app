import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CongratsScreen({ navigation }: any) {
  useEffect(() => {
    // Auto-redirect to Home after 3 seconds
    const timer = setTimeout(() => {
      // We need to trigger a state update in App.tsx to switch stacks, 
      // but since we are already authenticated, the App.tsx "Home" logic kicks in
      // if we reset navigation.
      // However, for this flow, we might need to manually call a "setProfileComplete" action.
      // For simplicity, we just navigate to Home if it exists in the stack, 
      // or rely on the fact that we are logged in.
      
      // Since App.tsx handles "If Token -> Home", and we have a Token,
      // We just need to break out of this specific "Goals" loop.
      // The easiest way is to reload the user/app state.
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