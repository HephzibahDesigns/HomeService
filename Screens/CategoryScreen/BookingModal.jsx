import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Heading from "../../Components/Heading";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Color from "../../Utils/Color";

export default function BookingModal({ setIsModalVisible }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  // text input
  const [textInput, setTextInput] = useState("");

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  // const startDate = selectedStartDate ? selectedStartDate.toString() : "";

  // time slot

  const [timeList, setTimeList] = useState();
  const [selectedTime, setSelectedTime] = useState();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];

    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });

      timeList.push({
        time: i + ":30 AM",
      });
    }

    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });

      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeList(timeList);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => setIsModalVisible(false)}
        >
          <Ionicons name="arrow-back" size={25} color="black" />
          <Heading text="Booking" />
        </TouchableOpacity>

        {/* Calendar section*/}
        <View style={{ marginHorizontal: 15 }}>
          <Heading text="Select Date" />
        </View>

        <View style={styles.calendarContainer}>
          <CalendarPicker
            width={350}
            onDateChange={onDateChange}
            todayBackgroundColor={Color.WHITE}
            todayTextStyle={{ color: Color.PRIMARY }}
            textStyle={{ color: Color.WHITE }}
            selectedDayColor={Color.BLACK}
            selectedDayTextColor={Color.WHITE}
          />
        </View>

        {/* Time select Category */}
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <Heading text="Select Time Slot" />
        </View>

        <View>
          <FlatList
            data={timeList}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{ marginTop: 10, marginHorizontal: 5 }}
                  onPress={() => setSelectedTime(item.time)}
                >
                  <Text
                    style={
                      selectedTime === item.time
                        ? styles.selectedTime
                        : styles.unSelectedTime
                    }
                  >
                    {item.time}
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

        {/* Note Section */}
        <View style={{ marginHorizontal: 15, marginTop: 15 }}>
          <Heading text="Any suggestion Note" />
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <TextInput
            style={styles.textInput}
            placeholder="Note Suggestion"
            multiline={true}
            numberOfLines={6}
            value={textInput}
            onChangeText={setTextInput}
          />

          <TouchableOpacity style={{ margin: 10 }}>
            <Text style={styles.confirmBtn}>Confirm and Book</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },

  calendarContainer: {
    backgroundColor: Color.PRIMARY,
    padding: 20,
    borderRadius: 20,
    margin: 5,
  },

  selectedTime: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: Color.MEDIUM_PRIMARY,
    borderRadius: 99,
    backgroundColor: Color.PRIMARY,
    color: Color.WHITE,
  },

  unSelectedTime: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: Color.MEDIUM_PRIMARY,
    borderRadius: 99,
    color: Color.PRIMARY,
  },

  textInput: {
    marginVertical: 12,
    padding: 20,
    height: 100,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Color.MEDIUM_PRIMARY,
    textAlignVertical: "top",
    fontFamily: "outfit-regular",
    fontSize: 16,
  },
  confirmBtn: {
    fontFamily: "outfit-medium",
    fontSize: 17,
    textAlign: "center",
    backgroundColor: Color.PRIMARY,
    color: Color.WHITE,
    padding: 16,
    borderRadius: 99,
    elevation: 2,
  },
});
