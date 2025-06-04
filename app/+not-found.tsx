import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}> Page Not Found </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 100,
    color: "red",
  },
  textSub: {
    fontSize: 10,
    color: "grey",
  },
});
