import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, Text } from 'react-native';
import { useAuthStore } from './src/store/authStore';

// Screens
import AuthScreen from './src/screens/AuthScreen'; // <--- NEW Unified Screen
import OnboardingScreen from './src/screens/OnboardingScreen';
import GoalsScreen from './src/screens/GoalsScreen';
import CongratsScreen from './src/screens/CongratsScreen';

// Placeholder for Home (We will build this next)
const HomeScreen = () => {
    const logout = useAuthStore(s => s.logout);
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Main Dashboard</Text>
            <Text onPress={logout} style={{marginTop:20, color:'blue'}}>Logout</Text>
        </View>
    );
};

const Stack = createNativeStackNavigator();

export default function App() {
  const { token, user, isLoading, isFirstLaunch, checkAppInit } = useAuthStore();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    checkAppInit();
    setTimeout(() => {
      setShowSplash(false);
    }, 2000); 
  }, []);

  if (showSplash || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#6200ee' }}>ForkWise</Text> 
      </View>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          {/* 1. Onboarding (First time users only) */}
          {isFirstLaunch && (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          )}

          {/* 2. Authentication (If not logged in) */}
          {!token ? (
            <Stack.Screen name="Auth" component={AuthScreen} />
          ) : (
            /* 3. Authenticated Flow */
            <>
              {/* If user logged in but has NO goals (New User) -> Show Setup */}
              {(!user?.goals || user.goals.length === 0) ? (
                 <>
                   <Stack.Screen name="Goals" component={GoalsScreen} />
                   <Stack.Screen name="Congrats" component={CongratsScreen} />
                 </>
              ) : null}
              
              {/* Main App */}
              <Stack.Screen name="Home" component={HomeScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}