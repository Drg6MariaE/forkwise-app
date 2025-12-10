import React from 'react';
import { Image, useColorScheme, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


import { headerStyles } from '../styles/header.styles';

export default function Header() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();


  return (
    <View
      style={[
        headerStyles.head,
        {

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