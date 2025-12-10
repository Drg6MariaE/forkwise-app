import React from 'react';
import { Image, useColorScheme, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Replaces useRouter

// Imports
import { headerStyles } from '../styles/header.styles';

export default function Header() {
  const navigation = useNavigation(); // Hook for navigation
  const colorScheme = useColorScheme();


  return (
    <View
      style={[
        headerStyles.head,
        {
          // Dynamic Overrides based on Theme

        },
      ]}
    >
     
      <Image
        source={require('../../assets/logoImage.png')} 
        style={headerStyles.logoImage}
      />
    </View>
  );
}