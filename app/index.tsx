import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import Login from "@/app/screen/auth/login";
import Register from "@/app/screen/auth/register";

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Register />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Light,
  },
});
