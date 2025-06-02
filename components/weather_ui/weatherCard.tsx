import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { FontAwesome, FontAwesome5, Feather } from "@expo/vector-icons";
import { WeatherColors } from "@/constants/WeatherColors";

type WeatherCardProps = {
  day: string;
  celcius: number;
  icon: "sun" | "cloud-rain" | "cloud" | "wind";
  windSpeed: number;
};

export default function weatherCard({
  day,
  celcius,
  icon,
  windSpeed,
}: WeatherCardProps) {
  function switchIconColor() {
    return icon == "sun"
      ? WeatherColors.sunny
      : icon == "cloud-rain"
      ? WeatherColors.rainy
      : icon == "cloud"
      ? WeatherColors.cloudy
      : icon == "wind"
      ? WeatherColors.windy
      : WeatherColors.sunny;
  }
  return (
    <View style={styles.cardContainer}>
      <ThemedText typo="body_bold" style={styles.header}>
        {day}
      </ThemedText>
      <View style={styles.body}>
        <ThemedText typo="body_bold">{celcius}°C</ThemedText>
        <Feather name={icon} size={40} color={switchIconColor()} />
        <ThemedText typo="caption">{windSpeed} km/h</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: Colors.Normal,
    borderWidth: 1,
    borderRadius: 10,
  },
  header: {
    color: Colors.White,
    backgroundColor: Colors.Normal,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: "center",
  },
  body: {
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
});
