import React, { useEffect, useRef } from "react";
import { Animated, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/header";
import { step1Styles as styles } from "../../styles/onboarding/step1.styles";

interface StepProps {
  onNext: () => void;
}

export default function Step1({ onNext }: StepProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <><Header />
    <LinearGradient
      colors={["#EFE5D2", "#C2D74D", "#F6EAD2"]}
      style={styles.container}
    >
      {/* Static Circles (or animate them if you prefer) */}
      <View style={styles.bgCircle1} />
      <View style={styles.bgCircle2} />

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Mindful Eating</Text>

        <Text style={styles.subtitle}>Tell us your goals</Text>
        <Text style={styles.description}>Sugar-free? Budget-friendly? We’ve got you.</Text>

        <Text style={styles.subtitle}>Get smart plans</Text>
        <Text style={styles.description}>AI builds daily plans just for you.</Text>
      </Animated.View>

      <TouchableOpacity onPress={onNext} style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient></>
  );
}