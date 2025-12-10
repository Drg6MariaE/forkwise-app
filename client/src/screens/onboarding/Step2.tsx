import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { step2Styles as styles } from "../../styles/onboarding/step2.styles";

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step2({ onNext, onBack }: StepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.circleDecoration} />
      
      <Text style={styles.title}>Track via Camera</Text>
      <Text style={styles.description}>
        Don't waste time typing. Just snap a photo of your meal, and our AI will calculate the calories and nutrients instantly.
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={onBack} style={styles.button}>
          <Text style={[styles.buttonText, { color: '#999' }]}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}