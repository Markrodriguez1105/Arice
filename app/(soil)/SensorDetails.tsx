import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ConnectionChecklist from "@/Soil-Health-Analysis/component/ConnectionChecklist";
import HeaderSection from "@/ReusableComponent/HeaderSection";
import { checklistItems } from "@/Soil-Health-Analysis/Sample-Value/checklistItems";
import { ChecklistStatusKey } from "@/types";

const SensorDetails = () => {
  const params = useLocalSearchParams();

  const sensor = params.sensor ? JSON.parse(params.sensor as string) : null;

  return (
    <ScrollView style={styles.container}>
      <HeaderSection />

      <View style={styles.sensorInfoCard}>
        <Image
          source={require("@/assets/images/SensorImage.png")}
          style={styles.sensorImage}
          resizeMode="contain"
        />
        <View style={styles.sensorDetails}>
          <Text style={styles.sensorTitle}>{sensor?.name}</Text>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Status:</Text>
            <Text
              style={[
                styles.statusValue,
                sensor?.status === "Cannot Find Device" && { color: "red" },
              ]}
            >
              {sensor?.status}
            </Text>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.connectButton}>
              <Text style={styles.connectButtonText}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.refreshButton}>
              <Ionicons name="refresh" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.checklistSection}>
        <Text style={styles.checklistHeader}>Device Connection Checklist</Text>
        <Text style={styles.checklistSubHeader}>
          Please follow these steps to prepare for the connection of your Sensor
          Device to the System
        </Text>
        {checklistItems.map((item) => (
          <ConnectionChecklist
            key={item.statusKey}
            {...item}
            statusKey={item.statusKey as ChecklistStatusKey}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 50,
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  headerText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  sensorInfoCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 16,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sensorImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  sensorDetails: {
    flex: 1,
  },
  sensorTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  statusLabel: {
    fontSize: 14,
    color: "#555",
    marginRight: 4,
  },
  statusValue: {
    fontSize: 14,
    fontWeight: "bold",
    // Removed hardcoded red color here, now it's conditional based on prop
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  connectButton: {
    backgroundColor: "#34A853", // Example green color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  connectButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  refreshButton: {
    padding: 8,
  },
  checklistSection: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  checklistHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#000",
  },
  checklistSubHeader: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default SensorDetails;
