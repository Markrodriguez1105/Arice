import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ChecklistStatusKey } from "@/types";

type StatusValue = "In-Progress" | "Completed";

// Checklist item props
interface ChecklistCardValue {
  itemNumber: number;
  title: string;
  description: string;
  statusKey: ChecklistStatusKey;
}

const ConnectionChecklist = (item: ChecklistCardValue) => {
  const [checklistStatus, setChecklistStatus] = useState<
    Record<ChecklistStatusKey, StatusValue>
  >({
    turnOnSensor: "In-Progress",
    checkConnectivity: "In-Progress",
    checkDistance: "In-Progress",
    reconnect: "In-Progress",
  });

  const toggleChecklistItem = (key: ChecklistStatusKey) => {
    setChecklistStatus((prevStatus) => {
      const currentStatus = prevStatus[key];
      const newStatus =
        currentStatus === "Completed" ? "In-Progress" : "Completed";
      return {
        ...prevStatus,
        [key]: newStatus,
      };
    });
  };

  const getStatusStyle = (status: StatusValue) => {
    switch (status) {
      case "In-Progress":
        return styles.statusInProgress;
      case "Completed":
        return styles.statusCompleted;
      default:
        return {};
    }
  };

  return (
    <TouchableOpacity
      style={styles.checklistCard}
      onPress={() => toggleChecklistItem(item.statusKey)}
      activeOpacity={0.7}
    >
      <View style={styles.checklistNumberContainer}>
        <Text style={styles.checklistNumber}>{item.itemNumber}</Text>
      </View>
      <View style={styles.checklistContent}>
        <Text style={styles.checklistTitle}>{item.title}</Text>
        <Text style={styles.checklistDescription}>{item.description}</Text>
      </View>
      <View style={styles.checklistStatusContainer}>
        <Text
          style={[
            styles.checklistStatusText,
            getStatusStyle(checklistStatus[item.statusKey]),
          ]}
        >
          {checklistStatus[item.statusKey]}
        </Text>
        {item.statusKey === "checkConnectivity" &&
          checklistStatus[item.statusKey] === "Completed" && (
            <Ionicons name="arrow-forward" size={24} color="#000" />
          )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checklistCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  checklistNumberContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  checklistNumber: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  checklistContent: {
    flex: 1,
  },
  checklistTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000",
  },
  checklistDescription: {
    fontSize: 13,
    color: "#777",
  },
  checklistStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  checklistStatusText: {
    fontSize: 13,
    fontWeight: "bold",
    marginRight: 5,
  },
  statusInProgress: {
    color: "#4D4D4D",
  },
  statusCompleted: {
    color: "#00C853",
  },
});

export default ConnectionChecklist;
