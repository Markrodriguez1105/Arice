import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import Login from "@/app/screen/Auth/login";
import Register from "@/app/screen/Auth/register";
import StartLoading from "@/app/screen/Startup/startLoading";
import AppDetailes from "./screen/Startup/appDetails";

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AppDetailes />
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
