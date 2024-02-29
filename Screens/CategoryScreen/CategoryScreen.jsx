import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../../Utils/GlobalApi";

import { useState, useEffect } from "react";
import CategoryScreenList from "./CategoryScreenList";

export default function CategoryScreen() {
  const navigation = useNavigation();

  // getting parameter
  const param = useRoute().params;

  useEffect(() => {
    // console.log("Category:", param.category);
    param && getEachCategory();
  }, []);

  const [businessCategories, setBusinessCategories] = useState([]);

  const getEachCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category).then((response) => {
      // console.log("response:", response.businessLists);
      setBusinessCategories(response.businessLists);
    });
  };

  // console.log(businessCategories.category.name);

  // refreshing the page
  const [refreshing, setRefreshing] = useState(false);

  // handle refresh function
  const handleRefresh = () => {
    setRefreshing(true);
    param && getEachCategory();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>

        <Text
          style={{ fontSize: 18, fontFamily: "outfit-medium", marginLeft: 5 }}
        >
          {param?.category}
        </Text>
      </View>

      <FlatList
        data={businessCategories}
        style={{ marginTop: 8 }}
        renderItem={({ item }) => {
          // console.log(item.id);
          // console.log(item.image.url);

          return (
            <View>
              <CategoryScreenList item={item} />
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
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },

  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
