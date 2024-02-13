import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Heading from "../../Components/Heading";
import { Ionicons } from "@expo/vector-icons";

export default function BookingModal({ setIsModalVisible }) {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => setIsModalVisible(false)}
    >
      <Ionicons name="arrow-back" size={25} color="black" />
      <Heading text="Booking" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
