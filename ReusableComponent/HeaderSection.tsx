import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

const HeaderSection = () => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Text style={styles.backButtonText}>{"< Back"}</Text>
      </TouchableOpacity>
      <View style={{ width: 50 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 50,
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  backButton: {
    padding: 5,
    width: 100,
  },
  backButtonText: {
    fontSize: 15,
    color: "#04D178",
  },
});

export default HeaderSection;
