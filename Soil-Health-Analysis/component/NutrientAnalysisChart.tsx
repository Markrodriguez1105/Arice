import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import Dropdown from "@/ReusableComponent/Dropdown";
import { LineChart } from "react-native-chart-kit";
import { monthChartData } from "@/Soil-Health-Analysis/Sample-Value/LineChartValue";
import { yearChartData } from "@/Soil-Health-Analysis/Sample-Value/LineChartValue";
import { chartConfig } from "@/Soil-Health-Analysis/UIConfig/ChartConfig";
import { legend } from "@/Soil-Health-Analysis/Sample-Value/LineChartValue";

const NutrientAnalysisChart = () => {
  const [selectedFilter, setSelectedFilter] = useState("Month");
  const [loading, setLoading] = useState(false);

  const chartFilterData = () => {
    return selectedFilter === "Month" ? monthChartData : yearChartData;
  };
  const chartWidth = chartFilterData().labels.length * 80;
  const dropdownOptions = ["Month", "Year"];

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, [selectedFilter]);

  return (
    <View style={styles.card}>
      <View style={styles.analysisHeader}>
        <Text style={styles.cardTitle}>Nutrients Analysis</Text>
        <Dropdown
          options={dropdownOptions}
          selected={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </View>

      <View style={styles.chartScrollViewContainer}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#04D178"
            style={{ marginVertical: 20 }}
          />
        ) : (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chartScrollContent}
          >
            <LineChart
              data={chartFilterData()}
              width={chartWidth}
              height={220}
              chartConfig={chartConfig}
              bezier
              withInnerLines={true}
              withOuterLines={true}
              fromZero={true}
              withVerticalLabels={true}
              withHorizontalLabels={true}
            />
          </ScrollView>
        )}
      </View>

      <View style={styles.legendContainer}>
        {legend.labels.map((color, index) => (
          <View key={index} style={styles.legendItem}>
            <View
              style={[
                styles.legendColorBox,
                { backgroundColor: legend.colors[index] },
              ]}
            />
            <Text style={styles.legendText}>{color}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 15,
  },

  analysisHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  dropdownPlaceholder: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: "#333",
  },
  chartPlaceholder: {
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginVertical: 10,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    flexWrap: "wrap",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 5,
  },
  legendColorBox: {
    width: 12,
    height: 12,
    borderRadius: 20,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    color: "#555",
  },

  chartScrollViewContainer: {
    marginVertical: 10,
    marginHorizontal: 0,
  },
  chartScrollContent: {
    alignContent: "flex-start",
    paddingRight: 0,
  },
  modalOverlay: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 345,
  },
  dropdownContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    maxHeight: 120,
    width: 120,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dropdownItemText: {
    fontSize: 14,
    color: "#333",
  },
});

export default NutrientAnalysisChart;
