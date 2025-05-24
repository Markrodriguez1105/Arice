import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  TextProps,
} from "react-native";
import React from "react";
import ThemedText from "./ThemedText";
import { FontAwesome } from "@expo/vector-icons";

type ButtonProps = {
  onPress: TouchableOpacityProps["onPress"];
  title: string;
  outlined?: boolean;
  hasIcon?: boolean;
  iconName?: keyof typeof FontAwesome.glyphMap;
  buttonColor?: string;
  textColor?: string;
  buttonStyle?: ViewProps["style"];
  textStyle?: TextProps["style"];
};

export default function Button({
  onPress,
  title = "Button",
  outlined = false,
  hasIcon = true,
  iconName = "save",
  buttonColor = "#007BFF",
  textColor = "#FFFFFF",
  buttonStyle,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          outlined
            ? [styles.buttonOutlined, { borderColor: buttonColor }, buttonStyle]
            : [styles.button, { backgroundColor: buttonColor }, buttonStyle]
        }
      >
        {hasIcon ? (
          <FontAwesome
            name={iconName}
            style={{ color: outlined ? buttonColor : textColor }}
            size={15}
          />
        ) : null}
        <ThemedText
          typo="body"
          style={[{ color: outlined ? buttonColor : textColor }, textStyle]}
        >
          {title}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  buttonOutlined: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
});
