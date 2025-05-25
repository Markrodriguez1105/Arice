import { StyleSheet, Text, type TextProps } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export type ThemedTextProps = TextProps & {
  typo:
    | "header1"
    | "header2"
    | "header3"
    | "header4"
    | "header5"
    | "body"
    | "body_bold"
    | "caption"
    | "note";
};

export default function ThemedText({ typo, style, ...rest }: ThemedTextProps) {
  return <Text style={[styles[typo], style]} {...rest} />;
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.Black,
  },
  header2: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.Black,
  },
  header3: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.Black,
  },
  header4: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.Black,
  },
  header5: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.Black,
  },
  body: {
    fontSize: 16,
    fontWeight: "normal",
    color: Colors.Black,
  },
  body_bold: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.Black,
  },
  caption: {
    fontSize: 14,
    fontWeight: "normal",
    color: Colors.Grey,
  },
  note: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "italic",
    color: Colors.Black,
  },
});
