import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Navigations/TabNavigation";
import Color from "./Utils/Color";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "outfit-regular": require("./assets/Fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/Fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./assets/Fonts/Outfit-Medium.ttf"),
  });
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_Y2l2aWwtc2hlZXAtOTguY2xlcmsuYWNjb3VudHMuZGV2JA"
    >
      <SafeAreaView style={styles.safeview}>
        <StatusBar barStyle="light-content" backgroundColor={Color.PRIMARY} />
        {/* Sign in component */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>

        {/* Sign out component */}
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    // backgroundColor: Color.PRIMARY,
    // color: Color.WHITE,
    // paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
