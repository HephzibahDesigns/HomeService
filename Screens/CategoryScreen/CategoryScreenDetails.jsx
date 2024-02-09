import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../Utils/Color";

export default function CategoryScreenDetails() {
  const param = useRoute().params;

  console.log(param.item);

  const navigation = useNavigation();

  const [categoryDetail, setCategoryDetail] = useState(param.item);

  return (
    <View>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate("CategoryScreen")}
      >
        <Ionicons name="arrow-back" size={25} color={Color.WHITE} />
      </TouchableOpacity>

      <Image
        source={{ uri: categoryDetail.images[0].url }}
        style={{ width: "100%", height: 300 }}
      />

      <View style={styles.infoContainer}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          {CategoryScreenDetails.name}
        </Text>

        <View style={styles.subContainer}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              color: Color.PRIMARY,
              fontSize: 16,
            }}
          >
            {categoryDetail.contactPerson} ⭐
          </Text>
          <Text style={styles.categoryName}>
            {categoryDetail.category.name}
          </Text>
        </View>

        <Text style={styles.address}>
          <Ionicons
            name="location-sharp"
            size={17}
            color={Color.MEDIUM_PRIMARY}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          {categoryDetail.address}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    position: "absolute",
    padding: 20,
    zIndex: 10,
  },

  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },

  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginTop: 5,
  },

  categoryName: {
    padding: 8,
    backgroundColor: Color.LIGHT_PRIMARY,
    color: Color.WHITE,
    borderRadius: 10,
    fontSize: 14,
  },

  address: {
    fontSize: 17,
    fontFamily: "outfit-regular",
    color: Color.GREY,
  },
});
