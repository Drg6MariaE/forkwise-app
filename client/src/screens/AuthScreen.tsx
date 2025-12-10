import React, { useState } from 'react';
import { View, Alert, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button, Text, Title, useTheme } from 'react-native-paper';
import { useAuthStore } from '../store/authStore';
import { authStyles } from '../styles/auth.styles';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true); 
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, register } = useAuthStore();
  const theme = useTheme();

  const handleSubmit = async () => {
   
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please fill in email and password.');
      return;
    }
    if (!isLogin && !fullName) {
      Alert.alert('Missing Fields', 'Please enter your full name.');
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(fullName, email, password);
      }

    } catch (error: any) {
      const msg = error.response?.data?.message || 'Authentication failed.';
      Alert.alert('Error', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={authStyles.container}
    >
      <ScrollView contentContainerStyle={authStyles.scrollContent}>
        <View style={authStyles.header}>
          <Text style={authStyles.title}>{isLogin ? 'Welcome Back' : 'Create Account'}</Text>
          <Text style={authStyles.subtitle}>
            {isLogin ? 'Enter your details to sign in' : 'Join ForkWise for free'}
          </Text>
        </View>

        <View style={authStyles.form}>
          {!isLogin && (
            <TextInput
              label="Full Name"
              value={fullName}
              onChangeText={setFullName}
              mode="outlined"
              style={authStyles.input}
              left={<TextInput.Icon icon="account" />}
            />
          )}

          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            style={authStyles.input}
            left={<TextInput.Icon icon="email" />}
          />

          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry
            style={authStyles.input}
            left={<TextInput.Icon icon="lock" />}
          />

          <Button 
            mode="contained" 
            onPress={handleSubmit} 
            loading={loading}
            disabled={loading}
            style={authStyles.button}
            contentStyle={{ paddingVertical: 8 }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </View>

        <View style={authStyles.footer}>
          <Text>{isLogin ? "Don't have an account? " : "Already have an account? "}</Text>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>
              {isLogin ? 'Sign Up' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}