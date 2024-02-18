import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import GlobalApi from "../../Utils/GlobalApi";
import Color from "../../Utils/Color";

import BusinessListItem from "./BusinessListItem";

export default function BusinessList() {
  useEffect(() => {
    getBusinessLists();
  }, []);

  const [businessLists, setBusinessLists] = useState([]);

  const getBusinessLists = () => {
    GlobalApi.getBusinessList().then((response) => {
      // console.log("response:", response.businessLists);
      setBusinessLists(response.businessLists);
    });
  };

  const Pressed = () => {
    console.log(" Pressed ok");
  };

  return (
    <View style={{ paddingHorizontal: 12, marginTop: 15 }}>
      <View style={styles.subContainer}>
        <Heading text="Latest Business" />

        <TouchableOpacity onPress={Pressed}>
          <Text style={styles.viewAll}> View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={businessLists}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingVertical: 10, marginRight: 10 }}>
              <BusinessListItem item={item} />
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

const styles = StyleSheet.create({
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
});
