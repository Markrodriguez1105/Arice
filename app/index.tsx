import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import Login from "@/app/screen/Auth/login";
import Register from "@/app/screen/Auth/register";
import StartLoading from "@/app/screen/Startup/startLoading";
import AppDetailes from "./screen/Startup/appDetails";
import Dashboard from "./(pages)/dashboard";
import ForecastView from "./screen/Weather/forecastView";

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StartLoading />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
