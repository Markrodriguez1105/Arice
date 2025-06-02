import {
  StyleSheet,
  View,
  ImageBackground,
  Alert,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import ThemedText from "@/components/ThemedText";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import Password from "@/components/Password";

export default function resgiter() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ImageBackground
      source={require("@/assets/images/authBg.png")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={4}
    >
      <View style={styles.logoContainer}>
        <ThemedText typo="header1">LOGO</ThemedText>
      </View>
      <View style={styles.loginContainer}>
        <ScrollView
          contentContainerStyle={{
            gap: 15,
            paddingHorizontal: 40,
            paddingVertical: 30,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              onPress={() => router.navigate("/screen/Auth/login")}
            >
              <FontAwesome name="chevron-left" size={15} />
              <ThemedText typo="body">Back</ThemedText>
            </Pressable>
          </View>
          <ThemedText typo="header5">Register</ThemedText>
          <ThemedText typo="body_bold" style={{ color: Colors.Dark }}>
            Personal Information
          </ThemedText>
          <Input
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
          ></Input>
          <Input
            label="Middle Name"
            value={middleName}
            onChangeText={setMiddleName}
          ></Input>
          <Input
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
          ></Input>
          <Input label="Gender" value={gender} onChangeText={setGender}></Input>
          <ThemedText typo="body_bold" style={{ color: Colors.Dark }}>
            Account
          </ThemedText>
          <Input
            label="Active Email Address"
            value={email}
            onChangeText={setEmail}
          ></Input>
          <View style={{ flexDirection: "row" }}>
            <Pressable>
              <ThemedText
                typo="caption"
                style={{ color: Colors.Accent, fontWeight: "bold" }}
              >
                Send Email Verification
              </ThemedText>
            </Pressable>
            {/* <ThemedText typo="caption"> `00:00</ThemedText> */}
          </View>
          <Password
            label="Password"
            value={password}
            onChangeText={setPassword}
          />
          <Password
            label="Repeat Password"
            value={repeatPassword}
            onChangeText={setRepeatPassword}
          />
          <Button
            title="Register"
            // outlined={true}
            hasIcon={false}
            buttonColor={Colors.Accent}
            onPress={() => Alert.alert("Register", "Register kaba")}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  loginContainer: {
    flex: 5,
    width: "100%",
    backgroundColor: Colors.Light,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});
