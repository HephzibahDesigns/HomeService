import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import Color from "../../Utils/Color";

import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  useEffect(() => {
    getCategories();
  }, []);

  const [categories, setCategories] = useState([]);

  const navigation = useNavigation();

  const getCategories = () => {
    GlobalApi.getCategory().then((response) => {
      // console.log("response:", response.categories);
      setCategories(response.categories);
    });
  };

  const Pressed = () => {
    console.log(" Pressed ok");
  };

  return (
    <View style={{ paddingHorizontal: 12 }}>
      <View style={styles.subContainer}>
        <Heading text="Categories" />

        <TouchableOpacity onPress={Pressed}>
          <Text style={styles.viewAll}> View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        horizontal={true}
        renderItem={({ item }) => {
          // console.log(item.name);
          // console.log(item.image.url);
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.navigate("CategoryScreen", {
                  category: item.name,
                })
              }
            >
              <View key={item.id} style={styles.iconContainer}>
                <Image
                  source={{ uri: item.icon.url }}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>

              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flex: 1,
    alignItems: "center",
  },

  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  viewAll: {
    fontSize: 18,
    fontFamily: "outfit-regular",
    color: Color.MEDIUM_PRIMARY,
    marginRight: 5,
  },

  iconContainer: {
    backgroundColor: Color.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
    marginTop: 12,
    marginHorizontal: 15,
  },
});
