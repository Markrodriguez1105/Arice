import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import ImproveCrop from "@/assets/images/startupIcons/improve-crop.png";
import Calendar from "@/assets/images/startupIcons/calendar.png";
import Think from "@/assets/images/startupIcons/think.png";
import ThemedText from "@/components/ThemedText";
import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function appDetailes() {
  const [pages, setPage] = useState(1);

  const improveCrop = () => {
    return (
      <>
        <View style={styles.iconContainer}>
          <Image source={ImproveCrop}></Image>
        </View>
        <View style={styles.textContainer}>
          <ThemedText typo="header3" style={{ textAlign: "center" }}>
            Improved Crop Management
          </ThemedText>
          <ThemedText typo="body" style={{ textAlign: "center" }}>
            “Improve crop management with tools that offer clear recommendations
            on planting schedules, irrigation, and fertilization, ensuring
            better yields and reduced waste.”
          </ThemedText>
        </View>
      </>
    );
  };

  const calender = () => {
    return (
      <>
        <View style={styles.iconContainer}>
          <Image source={Calendar}></Image>
        </View>
        <View style={styles.textContainer}>
          <ThemedText typo="header3" style={{ textAlign: "center" }}>
            Schedule the activities
          </ThemedText>
          <ThemedText typo="body" style={{ textAlign: "center" }}>
            “Plan planting activities effectively with smart rice to provide
            better recommendation and guide to improve activities”
          </ThemedText>
        </View>
      </>
    );
  };

  const think = () => {
    return (
      <>
        <View style={styles.iconContainer}>
          <Image source={Think}></Image>
        </View>
        <View style={styles.textContainer}>
          <ThemedText typo="header3" style={{ textAlign: "center" }}>
            Decision-Support
          </ThemedText>
          <ThemedText typo="body" style={{ textAlign: "center" }}>
            “Ask question and recommendation to boost farming and
            decision-making”
          </ThemedText>
        </View>
      </>
    );
  };

  const switchPages = (pages: number) => {
    return pages == 1
      ? improveCrop()
      : pages == 2
      ? calender()
      : pages == 3
      ? think()
      : null;
  };

  return (
    <View style={styles.container}>
      {switchPages(pages)}
      <View style={styles.circleContainer}>
        <View
          style={[
            styles.circle,
            pages >= 1 ? { backgroundColor: Colors.Normal } : {},
          ]}
        ></View>
        <View
          style={[
            styles.circle,
            pages >= 2 ? { backgroundColor: Colors.Normal } : {},
          ]}
        ></View>
        <View
          style={[
            styles.circle,
            pages >= 3 ? { backgroundColor: Colors.Normal } : {},
          ]}
        ></View>
      </View>
      <View
        style={[
          styles.buttonContainer,
          pages == 1
            ? { justifyContent: "flex-end" }
            : { justifyContent: "space-between" },
        ]}
      >
        {pages != 1 ? (
          <Button
            onPress={() => (pages > 1 ? setPage(pages - 1) : null)}
            title="Previous"
            hasIcon={false}
            buttonColor={Colors.Normal}
            buttonStyle={styles.button}
          ></Button>
        ) : null}

        <Button
          onPress={() => {
            if (pages < 3) {
              setPage(pages + 1);
            }
            if (pages == 3) {
              router.navigate("/screen/Auth/login");
            }
          }}
          title="Next"
          hasIcon={false}
          buttonColor={Colors.Normal}
          buttonStyle={styles.button}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  iconContainer: {
    flex: 4,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  textContainer: {
    flex: 3,
    paddingHorizontal: 30,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
  },

  button: {
    width: 100,
  },

  circleContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },

  circle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.Normal,
  },
});
