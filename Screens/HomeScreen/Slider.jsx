import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";

export default function Slider() {
  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getSLider().then((response) => {
      // console.log("response:", response.sliders);
      setSLider(response.sliders);
    });
  };

  const [slider, setSLider] = useState([]);

  return (
    <View style={{ paddingHorizontal: 12, marginTop: 8 }}>
      <Heading text="Offers For You" />

      <FlatList
        data={slider}
        horizontal={true}
        renderItem={({ item }) => {
          // console.log(item.id);
          // console.log(item.image.url);
          return (
            <View key={item.id} style={{ marginRight: 17, marginVertical: 5 }}>
              <Image
                source={{ uri: item.image.url }}
                style={{
                  width: 270,
                  height: 120,
                  borderRadius: 10,
                }}
              />
            </View>
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
