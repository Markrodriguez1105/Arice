import React, { ComponentProps, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SoilSummaryResponse } from "../Sample-Value/SoilSummaryData";
import { FetchedSummaryItem } from "@/types";
import { SummaryItemData } from "@/types";

const STATUS_COLORS = {
  good: "#1CA852",
  warning: "#F99303",
  alert: "#DA3C21",
  default: "#6c757d",
  dark: "#343a40",
};
const soilData = SoilSummaryResponse();

type IconName = ComponentProps<typeof Ionicons>["name"];

const getStatusStyles = (status: string): { icon: IconName; color: string } => {
  switch (status) {
    case "good":
      return { icon: "checkmark-outline", color: STATUS_COLORS.good };
    case "warning":
      return { icon: "alert-outline", color: STATUS_COLORS.warning };
    case "alert":
      return { icon: "close-outline", color: STATUS_COLORS.alert };
    default:
      return { icon: "analytics", color: STATUS_COLORS.default };
  }
};

const SoilSummary = ({ title = "Soil Summary" }) => {
  const [itemData, setItemData] = useState<SummaryItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchData: FetchedSummaryItem[] = await soilData;
        if (fetchData.length > 0) {
          const latestData = fetchData[0];
          const summaryData: SummaryItemData[] = [
            {
              id: "1",
              label: "Nitrogen",
              value: latestData.nitrogen.valueOf(),
              unit: "ppm",
              status: latestData.nitrogenStatus,
            },
            {
              id: "2",
              label: "Potassium",
              value: latestData.potassium.valueOf(),
              unit: "ppm",
              status: latestData.potassiumStatus,
            },
            {
              id: "3",
              label: "Phosphorus",
              value: latestData.phosphorus.valueOf(),
              unit: "ppm",
              status: latestData.phosphorusStatus,
            },
            {
              id: "4",
              label: "Soil Acidity",
              value: latestData.ph.valueOf(),
              unit: "pH",
              status: latestData.phStatus,
            },
          ];
          setItemData(summaryData);
        } else {
          setItemData([]);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Simulate network delay
      }
    };
    fetchData();
  }, []);
  console.log(error);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity
          onPress={() => console.log("Go to Details")}
          style={styles.arrowButton}
        >
          <Ionicons name="arrow-forward" size={25} color={STATUS_COLORS.dark} />
        </TouchableOpacity>
      </View>

      <View
        style={
          loading ? { flex: 1, justifyContent: "center" } : styles.gridContainer
        }
      >
        {loading ? (
          <ActivityIndicator size="large" color="#04D178" />
        ) : (
          itemData.map((item: SummaryItemData) => {
            const { icon, color } = getStatusStyles(item.status);
            return (
              <View key={item.id} style={styles.gridItem}>
                <View style={[styles.iconCircle, { borderColor: color }]}>
                  <Ionicons name={icon} size={30} color={color} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.valueText, { color: color }]}>
                    {item.value} {item.unit}
                  </Text>
                  <Text style={[styles.labelText, { color: color }]}>
                    {item.label}
                  </Text>
                </View>
              </View>
            );
          })
        )}
      </View>
      <View>
        <View style={styles.statusBarContainer}>
          <View style={[styles.legendBarContainer]}>
            <View
              style={[
                styles.legendLine,
                { backgroundColor: STATUS_COLORS.good },
              ]}
            />
            <View
              style={[
                styles.legendLine,
                { backgroundColor: STATUS_COLORS.warning },
              ]}
            />
            <View
              style={[
                styles.legendLine,
                { backgroundColor: STATUS_COLORS.alert },
              ]}
            />
          </View>
        </View>
        <View style={[styles.statusBarContainer, { marginTop: -7 }]}>
          <View style={styles.legendBarContainer}>
            <Text style={[styles.legendText, { color: STATUS_COLORS.good }]}>
              Normal
            </Text>
            <Text style={[styles.legendText, { color: STATUS_COLORS.warning }]}>
              Warning
            </Text>
            <Text style={[styles.legendText, { color: STATUS_COLORS.alert }]}>
              Critical
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  // --- Header ---
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: STATUS_COLORS.dark,
  },
  arrowButton: {
    padding: 5, // Increase touchable area
  },
  // --- Grid ---
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },
  gridItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  valueText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  labelText: {
    fontSize: 13,
    color: STATUS_COLORS.default,
  },
  // --- Status Bar ---
  statusBarContainer: {
    flexDirection: "row",
    height: 24,
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  legendBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  legendLine: {
    width: "20%",
    height: 10,
    marginHorizontal: 5,
  },
  legendText: {
    fontSize: 12,
    marginHorizontal: 5,
  },
});

export default SoilSummary;
