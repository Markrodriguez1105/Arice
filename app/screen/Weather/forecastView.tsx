import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import WeatherCard from "@/components/weather_ui/weatherCard";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function forecastView() {
  function switchIconWeather(icon: string) {
    return icon == "sun"
      ? require("@/assets/images/weatherIcons/sun.png")
      : icon == "cloud-rain"
      ? require("@/assets/images/weatherIcons/rain.png")
      : icon == "cloud"
      ? require("@/assets/images/weatherIcons/cloud.png")
      : icon == "wind"
      ? require("@/assets/images/weatherIcons/wind.png")
      : require("@/assets/images/weatherIcons/sun.png");
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
          onPress={() => router.navigate("/(pages)/dashboard")}
        >
          <FontAwesome name="chevron-left" size={15} />
          <ThemedText typo="body">Back</ThemedText>
        </Pressable>
      </View>
      <View style={styles.heroContainer}>
        <View style={styles.headerTextContainer}>
          <ThemedText typo="header5">Naga City</ThemedText>
          <ThemedText typo="body">June 2, 2025</ThemedText>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={switchIconWeather("rain")}
            style={{
              resizeMode: "contain",
            }}
          />
          <View style={styles.weatherTextContainer}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <ThemedText typo="header1" style={styles.textShadow}>
                21
              </ThemedText>
              <ThemedText typo="header5">°C</ThemedText>
            </View>
            <ThemedText
              typo="header5"
              style={[
                {
                  color: Colors.Grey,
                  fontWeight: "normal",
                  fontStyle: "italic",
                },
                styles.textShadow,
              ]}
            >
              Sunny
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.weatherContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ThemedText typo="header5">7-Day Forecast</ThemedText>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row", gap: 15 }}
        >
          <WeatherCard day="TODAY" celcius={21} icon="sun" windSpeed={21.1} />
          <WeatherCard day="TUE" celcius={23} icon="wind" windSpeed={25.3} />
          <WeatherCard day="WED" celcius={19} icon="cloud" windSpeed={22.8} />
          <WeatherCard
            day="THU"
            celcius={16}
            icon="cloud-rain"
            windSpeed={22.4}
          />
          <WeatherCard day="FRI" celcius={23} icon="sun" windSpeed={19.3} />
          <WeatherCard day="SAT" celcius={20} icon="sun" windSpeed={20.4} />
          <WeatherCard day="SUN" celcius={24} icon="sun" windSpeed={18.5} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heroContainer: {
    padding: 20,
  },
  headerTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    // position: "relative",
    height: Dimensions.get("screen").height * 0.5,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  weatherTextContainer: {
    // position: "absolute",
    // right: 0,
    // top: "50%",
    // transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
  },
  textShadow: {
    // textShadowColor: "#A1A1A1",
    // textShadowOffset: { width: 1, height: 3 },
    // textShadowRadius: 15,
  },
  weatherContainer: {
    gap: 15,
  },
});
