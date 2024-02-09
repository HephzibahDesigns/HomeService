import { View, Text, StyleSheet } from "react-native";

export default function Heading({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
  },
});
