import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../../Utils/Color";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CategoryScreenList({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push("CategoryDetails", {
          item: item,
        })
      }
      style={styles.container}
    >
      <Image
        source={{ uri: item.images[0].url }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      />

      <View style={{ display: "flex", gap: 3 }}>
        <Text
          style={{
            fontFamily: "outfit-regular",
            textAlign: "left",
            fontSize: 16,
            color: Color.GREY,
          }}
        >
          {item.contactPerson}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            textAlign: "left",
            fontSize: 17,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            textAlign: "left",
            fontSize: 14,
            color: Color.GREY,
          }}
        >
          <Ionicons
            name="location-sharp"
            size={14}
            color={Color.MEDIUM_PRIMARY}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          {item.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Color.WHITE,
    borderRadius: 15,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
    gap: 8,
  },
});
