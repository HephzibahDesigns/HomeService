import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../Utils/Color";
import Heading from "../../Components/Heading";
import CategoryScreenPhotos from "./CategoryScreenPhotos";
import BookingModal from "./BookingModal";

export default function CategoryScreenDetails() {
  const param = useRoute().params;

  // console.log(param.item);

  const navigation = useNavigation();

  const [categoryDetail, setCategoryDetail] = useState(param.item);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <ScrollView style={{ height: "91%" }}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.goBack("CategoryScreen")}
        >
          <Ionicons name="arrow-back" size={25} color={Color.WHITE} />
        </TouchableOpacity>

        <Image
          source={{ uri: categoryDetail.images[0].url }}
          style={{ width: "100%", height: 300 }}
        />

        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
            {categoryDetail.name}
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

          {/* Horizontal line */}

          <View
            style={{
              borderWidth: 0.3,
              borderColor: Color.GREY,
              marginVertical: 10,
            }}
          ></View>

          {/* About Me*/}
          <Heading text="About Me" />

          <Text
            style={{
              fontSize: 16,
              fontFamily: "outfit-regular",
              color: Color.GREY,
            }}
            numberOfLines={isReadMore ? 200 : 5}
          >
            {categoryDetail.about}
          </Text>

          <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit-regular",
                color: Color.PRIMARY,
                textDecorationLine: "underline",
              }}
            >
              {isReadMore ? "Read Less" : "Read More"}
            </Text>
          </TouchableOpacity>

          <CategoryScreenPhotos categoryDetail={categoryDetail} />
        </View>
      </ScrollView>

      {/* Book Now / Message*/}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
          gap: 5,
        }}
      >
        <TouchableOpacity style={{ flex: 1 }}>
          <Text style={styles.messageBtn}>Message</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.bookingBtn}>Book Now</Text>
        </TouchableOpacity>
      </View>

      {/* Modal*/}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
      >
        <BookingModal setIsModalVisible={setIsModalVisible} />
      </Modal>
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

  messageBtn: {
    fontSize: 16,
    fontFamily: "outfit-medium",
    paddingHorizontal: 23,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 99,
    textAlign: "center",
    color: Color.PRIMARY,
    borderColor: Color.LIGHT_PRIMARY,
  },

  bookingBtn: {
    fontSize: 16,
    fontFamily: "outfit-medium",
    borderRadius: 99,
    textAlign: "center",
    paddingHorizontal: 23,
    paddingVertical: 10,
    color: Color.WHITE,
    backgroundColor: Color.PRIMARY,
  },
});
