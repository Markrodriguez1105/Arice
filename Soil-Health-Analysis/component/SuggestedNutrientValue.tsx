import { View, Text, StyleSheet } from "react-native";
import { nutrients } from "@/Soil-Health-Analysis/Sample-Value/Nutrients-Value";

const SuggestedNutrientValue = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>Suggested Nutrients Value</Text>
      <Text style={styles.cardSubtitle}>
        AI suggest this value based from the past data and best numbers for each
        nutrients
      </Text>
      <View style={styles.scrollContent}>
        {nutrients.map((item) => (
          <View key={item.id} style={styles.nutrientRow}>
            <View style={styles.nutrientInfo}>
              <View
                style={[
                  styles.iconPlaceholder,
                  { backgroundColor: item.color },
                ]}
              >
                <Text style={styles.iconText}>{item.id}</Text>
              </View>
              <Text style={styles.nutrientName}>{item.name}</Text>
            </View>
            <Text style={styles.nutrientValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  scrollView: {
    maxHeight: 140,
  },
  scrollContent: {
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  card: {},
  cardTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 15,
  },
  nutrientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  nutrientInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconPlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "#fff",
    fontWeight: "bold",
  },
  nutrientName: {
    fontSize: 15,
    color: "#444",
  },
  nutrientValue: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
  },
});

export default SuggestedNutrientValue;
