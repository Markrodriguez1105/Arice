import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { commonStyles } from "@/Soil-Health-Analysis/UIConfig/CommonStyles";
import NutrientAnalysisChart from "@/Soil-Health-Analysis/component/NutrientAnalysisChart";
import SuggestedNutrientValue from "@/Soil-Health-Analysis/component/SuggestedNutrientValue";
import HealthSummary from "@/Soil-Health-Analysis/component/HealthSummary";
import HeaderSection from "@/ReusableComponent/HeaderSection";
import { summaryData } from "@/Soil-Health-Analysis/Sample-Value/Nutrients-Value";

const SoilHealthScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderSection />
      <View style={styles.headerContent}>
        <Text style={styles.mainTitle}>Soil Health Diagnosis</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <HealthSummary />

        <SuggestedNutrientValue />

        <View style={commonStyles.card}>
          <Text style={commonStyles.cardTitle}>Additional Soil Content</Text>
          <View style={styles.additionalContentRow}>
            <View style={styles.additionalContentBox}>
              <Text style={[styles.additionalValue, styles.phValue]}>
                {summaryData.at(3)?.value}
              </Text>
              <Text style={styles.additionalLabel}>Soil pH</Text>
            </View>
            <View style={styles.additionalContentBox}>
              <Text style={[styles.additionalValue, styles.moistureValue]}>
                90%
              </Text>
              <Text style={styles.additionalLabel}>Moisture</Text>
            </View>
            <View style={styles.additionalContentBox}>
              <Text style={[styles.additionalValue, styles.moistureValue]}>
                30 mm
              </Text>
              <Text style={styles.additionalLabel}>Water Level</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => console.log("Possible Action")}
          >
            <Text style={styles.actionButtonText}>Possible Actions</Text>
          </TouchableOpacity>
        </View>

        <NutrientAnalysisChart />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  headerContent: {
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  // --- Main Title ---
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
    marginLeft: 5,
    color: "#333",
  },

  // --- Additional Content ---
  additionalContentRow: {
    flexDirection: "row",
    justifyContent: "space-around", // Or space-between
    marginVertical: 15,
  },
  additionalContentBox: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: 120, // Give some width
    backgroundColor: "#fdfdfd", // Slightly off-white
  },
  additionalValue: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  phValue: {
    color: "#E57373", // Reddish color
  },
  moistureValue: {
    color: "#81C784", // Greenish color
  },
  additionalLabel: {
    fontSize: 14,
    color: "#777",
  },
  actionButton: {
    borderColor: "#04D078",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  actionButtonText: {
    color: "#04D078",
    fontWeight: "600",
    fontSize: 15,
  },
  // --- Bottom Nav ---
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === "ios" ? 80 : 65,
    paddingBottom: Platform.OS === "ios" ? 15 : 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 24,
    marginBottom: 2,
    color: "#9E9E9E",
  },
  navLabel: {
    fontSize: 10,
    color: "#666",
  },
});

export default SoilHealthScreen;
