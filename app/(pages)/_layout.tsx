import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="dashboard"
      backBehavior="history"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        headerShown: false,
        tabBarActiveTintColor: Colors.NormalActive,
        tabBarInactiveTintColor: Colors.Black,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: (iconColor) => (
            <Ionicons name="home" size={24} color={iconColor.color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: (iconColor) => (
            <Ionicons name="person" size={24} color={iconColor.color} />
          ),
        }}
      />
    </Tabs>
  );
}
