import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import WeatherCard from "@/components/weather_ui/weatherCard";
import { router } from "expo-router";

export default function dashboard() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.sampleSize}>
            <ThemedText typo="body">Header</ThemedText>
          </View>
          <View style={styles.sampleSize}>
            <ThemedText typo="body">Rice Recommend</ThemedText>
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
              <TouchableOpacity
                onPress={() => router.navigate("/screen/Weather/forecastView")}
                style={{ flexDirection: "row", gap: 10 }}
              >
                <ThemedText typo="caption">More details</ThemedText>
                <FontAwesome name="caret-right" size={17} />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexDirection: "row", gap: 15 }}
            >
              <WeatherCard
                day="TODAY"
                celcius={21}
                icon="sun"
                windSpeed={21.1}
              />
              <WeatherCard
                day="TUE"
                celcius={23}
                icon="wind"
                windSpeed={25.3}
              />
              <WeatherCard
                day="WED"
                celcius={19}
                icon="cloud"
                windSpeed={22.8}
              />
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
          <View style={styles.sampleSize}>
            <ThemedText typo="body">Soil Analysis</ThemedText>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 20,
  },
  sampleSize: {
    width: "100%",
    backgroundColor: "#A1A1A1",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  weatherContainer: {
    gap: 15,
  },
});
