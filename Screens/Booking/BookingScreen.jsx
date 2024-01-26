import { View, Text, StyleSheet } from "react-native";

export default function BookingScreen() {
  return (
    <View styles={styles.bookContainer}>
      <Text>BookingScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flex: 1,
  },
});
