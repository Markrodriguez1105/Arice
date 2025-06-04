import React, { useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  ImageSourcePropType,
  ColorValue,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Sensor } from "@/types";

const sensorIcon =
  require("@/assets/images/SensorImage.png") as ImageSourcePropType;

interface SensorCardProps {
  sensor: Sensor;
}

const SensorCard = ({ sensor }: SensorCardProps) => {
  const router = useRouter();
  const getInitialOnline = (sensor: Sensor) => sensor.status === "Online";

  const [isAvailable, toggle] = useReducer(
    (state: boolean) => !state,
    getInitialOnline(sensor)
  );

  const handleSensorPress = () => {
    router.push({
      pathname: "/SensorDetails",
      params: { sensor: JSON.stringify(sensor) },
    });
  };

  const handleToggleChange = (sensor: Sensor) => {
    if (sensor.status === "Device not Found") {
      return "Device not Found";
    }
    if (sensor.status === "Offline") {
      return "";
    }

    return isAvailable ? "In-Use" : "Available";
  };

  const statusColor = (): ColorValue | undefined => {
    switch (sensor.status) {
      case "Online":
        return "#00C853";

      case "Offline":
        return "#4D4D4D";

      case "Device not Found":
        return "#DA3C21";

      default:
        return "#00000";
    }
  };

  const secondaryStatusColor = (): ColorValue | undefined => {
    if (sensor.status === "Device not Found") {
      return "#DA3C21";
    }
    return isAvailable ? "#00C853" : "#4D4D4D";
  };

  return (
    <TouchableOpacity onPress={handleSensorPress} style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={sensorIcon} style={styles.sensorIcon} />
        <View style={styles.descriptionContainer}>
          <Text style={[styles.sensorStatus, { color: statusColor() }]}>
            {sensor.status}
          </Text>
          <Text style={styles.sensorName}>{sensor.name}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <Switch
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          trackColor={{ false: "#767577", true: "#04D178" }}
          thumbColor={isAvailable ? "#FFFFFF" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggle}
          value={isAvailable}
          disabled={sensor.status === "Device not Found"}
        />
        <Text style={[{ color: secondaryStatusColor() }]}>
          {handleToggleChange(sensor)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 180,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginRight: 15,
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  iconContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
  },
  descriptionContainer: {
    alignItems: "flex-end",
    marginLeft: 10,
  },
  sensorIcon: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  sensorName: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "center",
  },
  sensorStatus: {
    fontSize: 16,
    marginBottom: 20,
  },
  sensorSecondaryStatus: {
    fontSize: 14,
    color: "#888",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default SensorCard;
