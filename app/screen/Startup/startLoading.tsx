import { StyleSheet, View, Image, Pressable, Alert } from "react-native";
import React from "react";
import icon from "@/assets/images/logos/icon.png";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import LoopFadeView from "@/components/animations/LoopFadeView";

export default function startLoading() {
  return (
    <View style={styles.container}>
      <Image source={icon} />
      <ThemedText typo="header3" style={{ color: Colors.Normal }}>
        ARICE
      </ThemedText>
      <Pressable onPress={() => Alert.alert("Start", "Loading Boss")}>
        <LoopFadeView>
          <ThemedText typo="body" style={{ color: Colors.Accent }}>
            Tap to get started
          </ThemedText>
        </LoopFadeView>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
});
