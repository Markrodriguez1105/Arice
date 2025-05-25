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
    <View style={{ gap: 10, flex: 1 }}>
      {hasLabel ? <ThemedText typo="body">{label}</ThemedText> : null}
      <View style={styles.input}>
        <TextInput style={styles.inputText} {...rest} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderColor: "#B3B3B3",
    borderWidth: 1,
    borderRadius: 10,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
  },
});
