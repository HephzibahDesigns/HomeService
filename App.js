import { StyleSheet, Platform, SafeAreaView } from "react-native";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Navigations/TabNavigation";

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
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_Y2l2aWwtc2hlZXAtOTguY2xlcmsuYWNjb3VudHMuZGV2JA"
    >
      <SafeAreaView style={styles.safeview}>
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
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
