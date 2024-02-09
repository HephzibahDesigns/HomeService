import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Color from "../../Utils/Color";

export default function BusinessListItem({ item }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.images[0].url }}
        style={{
          width: 160,
          height: 120,
          borderRadius: 10,
        }}
      />

      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 17, fontFamily: "outfit-medium" }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "outfit-regular",
            color: Color.GREY,
          }}
        >
          {item.contactPerson}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "outfit-bold",
            padding: 4,
            color: Color.WHITE,
            backgroundColor: Color.LIGHT_PRIMARY,
            alignSelf: "flex-start",
            borderRadius: 4,
            marginTop: 5,
          }}
        >
          {item.category.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Color.WHITE,
    borderRadius: 10,
  },
});
