import React, { useState } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button, Text, Title, useTheme } from 'react-native-paper';
import { useAuthStore } from '../store/authStore';
import { authStyles } from '../styles/auth.styles';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true); // Toggle state
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, register } = useAuthStore();
  const theme = useTheme();

  const handleSubmit = async () => {
    // Validation
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
      // App.tsx will automatically switch screens upon success
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
      style={authStyleslStyles.container}
    >
      <ScrollView contentContainerStyle={authStyleslStyles.scrollContent}>
        <View style={authStyleslStyles.header}>
          <Text style={authStyleslStyles.title}>{isLogin ? 'Welcome Back' : 'Create Account'}</Text>
          <Text style={authStyleslStyles.subtitle}>
            {isLogin ? 'Enter your details to sign in' : 'Join ForkWise for free'}
          </Text>
        </View>

        <View style={authStyleslStyles.form}>
          {/* Full Name - Only show if Registering */}
          {!isLogin && (
            <TextInput
              label="Full Name"
              value={fullName}
              onChangeText={setFullName}
              mode="outlined"
              style={authStyleslStyles.input}
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
            style={authStyleslStyles.input}
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
            style={authStyleslStyles.button}
            contentStyle={{ paddingVertical: 8 }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </View>

        <View style={authStyleslStyles.footer}>
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

const authStyleslStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  header: { alignItems: 'center', marginBottom: 32 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666' },
  form: { marginBottom: 24 },
  input: { marginBottom: 16 },
  button: { marginTop: 8, borderRadius: 8 },
  footer: { flexDirection: 'row', justifyContent: 'center' },
});