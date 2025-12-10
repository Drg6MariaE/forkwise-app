import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuthStore } from './src/store/authStore';

// 1. Import all your real screens
import AuthScreen from './src/screens/AuthScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import GoalsScreen from './src/screens/GoalsScreen';
import CongratsScreen from './src/screens/CongratsScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const { token, user, isLoading, isFirstLaunch, checkAppInit } = useAuthStore();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    checkAppInit();
    // Keep splash visible for 2 seconds for branding
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Loading State (Splash)
  if (showSplash || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        {/* You can replace this Text with your new Header Logo Image if you want! */}
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#6200ee' }}>ForkWise</Text> 
      </View>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        {/* We hide the default header because you built a custom one */}
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          
          {/* A. First Launch Flow */}
          {isFirstLaunch && (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          )}

          {/* B. Authentication Flow */}
          {!token ? (
            <Stack.Screen name="Auth" component={AuthScreen} />
          ) : (
            /* C. Logged In Flow */
            <>
              {/* If user logged in but has NO goals (New Account) -> Setup Flow */}
              {(!user?.goals || user.goals.length === 0) ? (
                 <>
                   <Stack.Screen name="Goals" component={GoalsScreen} />
                   <Stack.Screen name="Congrats" component={CongratsScreen} />
                 </>
              ) : null}
              
              {/* Main Dashboard */}
              <Stack.Screen name="Home" component={HomeScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}