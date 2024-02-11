import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import Heading from "../../Components/Heading";

export default function CategoryScreenPhotos({ categoryDetail }) {
  return (
    <View>
      {/* Photos*/}
      <Heading text="Photos" />

      <FlatList
        data={categoryDetail.images}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item.url }}
              style={{
                width: "50%",
                height: 150,
                marginTop: 10,
                marginRight: 10,
              }}
            />
          );
        }}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            No Item Found
          </Text>
        }
      />
    </View>
  );
}
