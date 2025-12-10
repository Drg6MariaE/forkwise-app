import React from 'react';
import { Image, useColorScheme, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Replaces useRouter

// Imports
import { colors } from '../styles/colors';
import { headerStyles } from '../styles/header.styles';

export default function Header() {
  const navigation = useNavigation(); // Hook for navigation
  const colorScheme = useColorScheme();
  
  // Select theme based on device settings
  const themeColors = colorScheme === 'dark' ? colors.dark : colors.light;

  return (
    <View
      style={[
        headerStyles.head,
        {
          // Dynamic Overrides based on Theme
          backgroundColor: themeColors.secondary,
          shadowColor: themeColors.primary, 
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