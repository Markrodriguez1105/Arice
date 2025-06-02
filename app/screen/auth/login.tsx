import {
  StyleSheet,
  View,
  ImageBackground,
  Alert,
  Pressable,
  ScrollView,
  AppState,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import ThemedText from "@/components/ThemedText";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Password from "@/components/Password";
import { router } from "expo-router";
import { supabase } from "@/lib/supabase";

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
    if (data.session) {
      router.navigate("/(pages)/dashboard");
    }
  }

  // async function signUpWithEmail() {
  //   setLoading(true);
  //   const {
  //     data: { session },
  //     error,
  //   } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   });
  //   if (error) Alert.alert(error.message);
  //   if (!session)
  //     Alert.alert("Please check your inbox for email verification!");
  //   setLoading(false);
  // }

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
          <ThemedText typo="header5">Log in</ThemedText>
          <Input
            hasLabel={false}
            onChangeText={setEmail}
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            autoComplete="email"
            keyboardType="email-address"
          />
          <Password
            hasLabel={false}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
          <View style={{ flexDirection: "row" }}>
            <Pressable onPress={() => Alert.alert("Forgot", "Patalon Kaman")}>
              <ThemedText typo="caption">Forgot the Password?</ThemedText>
            </Pressable>
          </View>
          <Button
            title="Log in"
            outlined={true}
            // disabled={loading}
            buttonColor={Colors.Accent}
            hasIcon={false}
            onPress={() => signInWithEmail()}
          />
          <View style={{ flexDirection: "row" }}>
            <ThemedText typo="caption">You don’t have account? </ThemedText>
            <Pressable onPress={() => router.navigate("/screen/Auth/register")}>
              <ThemedText typo="caption" style={{ color: Colors.Accent }}>
                Create Account.
              </ThemedText>
            </Pressable>
          </View>
          <Button
            title="Log in with Google"
            buttonColor="#F83D3D"
            iconName="google"
            onPress={() => Alert.alert("Sign In", "HAHAHAHAH")}
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
    width: "100%",
    backgroundColor: Colors.Light,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});
