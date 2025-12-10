import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text, Title } from 'react-native-paper';
import { useAuthStore } from '../store/authStore';

// IMPORT DESIGN
import { congratsStyles as styles } from '../styles/congrats.styles';

export default function CongratsScreen() {
  const loadUser = useAuthStore(s => s.checkAppInit);

  useEffect(() => {
    // Show animation for 2.5 seconds, then refresh user state
    // This will trigger App.tsx to see the new "goals" and switch to Home
    const timer = setTimeout(() => {
      loadUser(); 
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎉</Text>
      <Title style={styles.title}>All Set!</Title>
      <Text style={styles.subtitle}>Preparing your dashboard...</Text>
    </View>
  );
}