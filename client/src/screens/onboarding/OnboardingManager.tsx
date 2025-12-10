import React, { useState } from 'react';
import { View } from 'react-native';
import { useAuthStore } from '../../store/authStore';
import { useNavigation } from "@react-navigation/native";

// Import Steps
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default function OnboardingManager() {
  const [step, setStep] = useState(1);
  const navigation = useNavigation<any>();
  const completeOnboarding = useAuthStore(s => s.completeOnboarding);

  const handleFinish = () => {
    // 1. Mark onboarding as seen in storage
    completeOnboarding();
    // 2. Navigate to Auth Screen (Login/Register)
    navigation.replace("Auth");
  };

  return (
    <View style={{ flex: 1 }}>
      {step === 1 && <Step1 onNext={() => setStep(2)} />}
      {step === 2 && <Step2 onBack={() => setStep(1)} onNext={() => setStep(3)} />}
      {step === 3 && <Step3 onBack={() => setStep(2)} onFinish={handleFinish} />}
    </View>
  );
}