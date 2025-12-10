import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Title, Card, Avatar } from 'react-native-paper';
import { useAuthStore } from '../store/authStore';
import { homeStyles as styles } from '../styles/home.styles';

// 👇 IMPORT YOUR NEW HEADER
import Header from '../components/header';

export default function HomeScreen() {
  const { user } = useAuthStore();

  return (
    <View style={{ flex: 1 }}>
      {/* 👇 Place your Custom Header at the very top */}
      <Header />

      <ScrollView style={styles.container}>
        {/* Welcome Text */}
        <View style={styles.header}>
           <View>
             <Text variant="bodyLarge">Welcome back,</Text>
             <Title style={styles.username}>{user?.fullName || 'User'}</Title>
           </View>
        </View>

        {/* ... The rest of your summary cards ... */}
        
      </ScrollView>
    </View>
  );
}