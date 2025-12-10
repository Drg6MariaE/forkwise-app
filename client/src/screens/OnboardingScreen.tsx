import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, Title } from 'react-native-paper';
import { useAuthStore } from '../store/authStore';

// IMPORT DESIGN
import { onboardingStyles as styles } from '../styles/onboarding.styles';

const pages = [
  { title: "Welcome to ForkWise", desc: "Your personal AI nutrition assistant. Eat smarter, not less." },
  { title: "Track via Camera", desc: "Snap a photo of your meal and let AI calculate the calories instantly." },
  { title: "Reach Your Goals", desc: "Whether it's weight loss or muscle gain, we guide you every step." }
];

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const completeOnboarding = useAuthStore(s => s.completeOnboarding);

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else completeOnboarding();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Placeholder for an illustration */}
        <View style={styles.imagePlaceholder}>
           <Title>IMG {step + 1}</Title>
        </View>

        <Title style={styles.title}>{pages[step].title}</Title>
        <Text style={styles.desc}>{pages[step].desc}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleNext} style={styles.button}>
          {step === 2 ? "Get Started" : "Next"}
        </Button>
      </View>
    </View>
  );
}