import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text, Title } from 'react-native-paper';
import { useAuthStore } from '../store/authStore';

import { congratsStyles as styles } from '../styles/congrats.styles';

export default function CongratsScreen() {
  const loadUser = useAuthStore(s => s.checkAppInit);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadUser(); 
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.title}>All Set!</Text>
      <Text style={styles.subtitle}>Preparing your dashboard...</Text>
    </View>
  );
}