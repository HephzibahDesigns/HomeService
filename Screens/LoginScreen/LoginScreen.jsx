import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../../Utils/Color";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import React from "react";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const loginImg = require("../../assets/Images/login.png");

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
      <Image source={loginImg} style={styles.loginImage} />

      <View style={styles.subContainer}>
        <Text style={styles.subText}>
          Let's find{" "}
          <Text style={{ fontWeight: "bold" }}>
            Professional Cleaning and repair
          </Text>{" "}
          Service
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            paddingTop: 7,
            color: Color.WHITE,
          }}
        >
          Best App to find services near you which can deliver a Professional
          service
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{ color: Color.PRIMARY, textAlign: "center", fontSize: 17 }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: Color.BLACK,
    borderRadius: 15,
    resizeMode: "contain",
  },
  subContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: Color.PRIMARY,
    marginTop: -50,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  subText: {
    fontSize: 24,
    textAlign: "center",
    color: Color.WHITE,
  },
  button: {
    backgroundColor: Color.WHITE,
    marginTop: 40,
    padding: 14,
    borderRadius: 99,
  },
});
