import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

interface RiceType {
  name: string;
  icon: any; // Change to ImageSourcePropType if using static images
}

const riceList: RiceType[] = [
  { name: "RC 222", icon: require("../ariceAssets/riceimage.png") },
  { name: "RC 160", icon: require("../ariceAssets/riceimage.png") },
  { name: "RC 480", icon: require("../ariceAssets/riceimage.png") },
  { name: "Jasmin", icon: require("../ariceAssets/riceimage.png") },
  { name: "Basmati", icon: require("../ariceAssets/riceimage.png") },
  { name: "Wild Rice", icon: require("../ariceAssets/riceimage.png") },
  { name: "Black Rice", icon: require("../ariceAssets/riceimage.png") },
  { name: "Sticky Rice", icon: require("../ariceAssets/riceimage.png") },
];

const RiceReco: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rice Recommended</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.listContainer}>
          {riceList.map((rice, index) => (
            <View key={index} style={styles.item}>
              <Image source={rice.icon} style={styles.icon} />
              <Text style={styles.label}>{rice.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
  },
  item: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 12,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
  },
});

export default RiceReco;
