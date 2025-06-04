import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  UIManager,
  ImageSourcePropType,
} from "react-native";
import CollapsibleSection from "@/ReusableComponent/CollapsibleSection";
import SensorCard from "@/Soil-Health-Analysis/component/SensorCard";
import { sensorData } from "@/Soil-Health-Analysis/Sample-Value/dummyData";
import { Sensor } from "@/types";
const ProfileImage = "@/assets/images/favicon.png";

// Enable LayoutAnimation for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Define image sources
const profilePic = require(ProfileImage) as ImageSourcePropType;

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileTitle}>PROFILE</Text>
        <View style={styles.profileImageContainer}>
          <Image source={profilePic} style={styles.profileImage} />
        </View>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe431@sample.com</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <CollapsibleSection title="Farming History">
        <Text style={styles.sectionContentText}>
          Farming History Placeholder ....
        </Text>
      </CollapsibleSection>

      {/* Product Listing */}
      <CollapsibleSection title="Product Listing">
        <Text style={styles.sectionContentText}>
          Product Listing Placeholder....
        </Text>
      </CollapsibleSection>

      <CollapsibleSection title="Soil Sensors">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.sensorCardsContainer}
        >
          {sensorData.map((sensor: Sensor) => (
            <SensorCard key={sensor.id} sensor={sensor} />
          ))}
        </ScrollView>
      </CollapsibleSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: 15,
    backgroundColor: "#ccc",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#04D178",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  collapsibleSection: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    transform: [{ rotate: "0deg" }], // Initial state (down)
  },
  arrowUp: {
    transform: [{ rotate: "180deg" }], // When expanded (up)
  },
  sectionContentText: {
    paddingVertical: 15,
    fontSize: 16,
    color: "#555",
  },
  sensorCardsContainer: {
    paddingVertical: 10,
  },
});
