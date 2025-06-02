import { Animated } from "react-native";
import React, { useEffect, useRef } from "react";

type FadeInViewProps = {
  children: React.ReactNode;
};

export default function LoopFadeView({ children }: FadeInViewProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
  );
}
