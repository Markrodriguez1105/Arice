import { StyleSheet } from "react-native";
export const commonStyles = StyleSheet.create({
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
});

export const statusStyles = StyleSheet.create({});
