import { StyleSheet, View } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";

export default function profile() {
  return (
    <View style={styles.container}>
      <ThemedText typo="header1">Profile</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
