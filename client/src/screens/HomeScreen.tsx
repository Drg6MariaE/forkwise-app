import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Title, Card, Avatar } from 'react-native-paper';
import { useAuthStore } from '../store/authStore';
import { homeStyles as styles } from '../styles/home.styles';


import Header from '../components/header';

export default function HomeScreen() {
  const { user } = useAuthStore();

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <ScrollView style={styles.container}>
    
        <View style={styles.header}>
           <View>
             <Text variant="bodyLarge">Welcome back,</Text>
             <Text style={styles.username}>{user?.fullName || 'User'}</Text>
           </View>
        </View>

        
      </ScrollView>
    </View>
  );
}