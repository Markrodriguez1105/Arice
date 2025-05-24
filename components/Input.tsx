import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";

type InputProps = TextInputProps & {
  label?: string;
  hasLabel?: boolean;
};

export default function Input({
  label = "Label",
  hasLabel = true,
  ...rest
}: InputProps) {
  return (
    <View style={{ gap: 10 }}>
      {hasLabel ? <ThemedText typo="body">{label}</ThemedText> : null}
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    padding: 15,
    borderColor: "#B3B3B3",
    borderWidth: 1,
    borderRadius: 10,
  },
});
