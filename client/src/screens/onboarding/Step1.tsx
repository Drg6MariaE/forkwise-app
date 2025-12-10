import React, { useEffect, useRef } from "react";
import { Animated, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/header";
import { step1Styles as styles } from "../../styles/onboarding/step1.styles";

interface StepProps {
  onNext: () => void;
}

export default function Step1({ onNext }: StepProps) {

  const scaleCircle1 = useRef(new Animated.Value(0)).current;
  const translateCircle1 = useRef(new Animated.ValueXY({ x: -200, y: -200 })).current;

  const scaleCircle2 = useRef(new Animated.Value(0)).current;
  const translateCircle2 = useRef(new Animated.ValueXY({ x: 200, y: 200 })).current;

  const fadeContent = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.parallel([

      Animated.timing(scaleCircle1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(translateCircle1, {
        toValue: { x: 0, y: 0 },
        duration: 2000,
        useNativeDriver: true,
      }),

      Animated.timing(scaleCircle2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(translateCircle2, {
        toValue: { x: 0, y: 0 },
        duration: 2000,
        useNativeDriver: true,
      }),

      Animated.timing(fadeContent, {
        toValue: 1,
        duration: 1500,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <>
      <Header />
      <LinearGradient
        colors={["#EFE5D2", "#C2D74D", "#F6EAD2"]}
        style={styles.container}
      >
        <Animated.View
          style={[
            styles.bgCircle1,
            {
              transform: [
                { translateX: translateCircle1.x },
                { translateY: translateCircle1.y },
                { scale: scaleCircle1 },
              ],
            },
          ]}
        />

        <Animated.View
          style={[
            styles.bgCircle2,
            {
              transform: [
                { translateX: translateCircle2.x },
                { translateY: translateCircle2.y },
                { scale: scaleCircle2 },
              ],
            },
          ]}
        />


        <Animated.View style={[styles.content, { opacity: fadeContent }]}>
          <Text style={styles.title}>Your path to mindful eating starts here</Text>

          <Text style={styles.subtitle}>Tell us your goals</Text>
          <Text style={styles.description}>
            Sugar-free? Budget-friendly? We’ve got you.
          </Text>

          <Text style={styles.subtitle}>Get smart plans</Text>
          <Text style={styles.description}>
          AI builds daily or travel-based plans just for you.
          </Text>
          <Text style={styles.subtitle}>Track & thrive</Text>
          <Text style={styles.description}>
          Log meals, monitor nutrients, and celebrate progress.
          </Text>
        </Animated.View>

        {/* Next Button */}
        <TouchableOpacity onPress={onNext} style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}