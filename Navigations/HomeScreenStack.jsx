import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import CategoryScreen from "../Screens/CategoryScreen/CategoryScreen";
import CategoryScreenDetails from "../Screens/CategoryScreen/CategoryScreenDetails";

const Stack = createStackNavigator();

export default function HomeScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="CategoryDetails" component={CategoryScreenDetails} />
    </Stack.Navigator>
  );
}
