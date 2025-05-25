import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ThemedText from "./ThemedText";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type InputProps = TextInputProps & {
  label?: string;
  hasLabel?: boolean;
};

export default function Password({
  label = "Label",
  hasLabel = true,
  ...rest
}: InputProps) {
  const [secureText, setSecureText] = useState(true);
  return (
    <View style={styles.inputContainer}>
      {hasLabel ? <ThemedText typo="body">{label}</ThemedText> : null}
      <View style={styles.input}>
        <TextInput
          {...rest}
          style={styles.inputText}
          secureTextEntry={secureText}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          autoComplete="password"
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <FontAwesome
            name={secureText ? "eye" : "eye-slash"}
            size={20}
            color={Colors.Grey}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    gap: 10,
    flex: 1,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderColor: "#B3B3B3",
    borderWidth: 1,
    borderRadius: 10,
  },
  inputText: {
    // backgroundColor: "blue",
    flex: 1,
    fontSize: 16,
  },
});
