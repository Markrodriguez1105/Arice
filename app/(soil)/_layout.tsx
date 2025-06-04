import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="SensorDetails" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
