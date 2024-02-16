import { View, Text, StyleSheet, FlatList } from "react-native";

export default function BookingScreen() {
  return (
    <View styles={styles.bookContainer}>
      <FlatList
        data={""}
        renderItem={({ item }) => {
          return <Text>Nothing Here</Text>;
        }}
        ListEmptyComponent={
          <Text
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
              paddingTop: 50,
              fontSize: 18,
              fontFamily: "outfit-medium",
            }}
          >
            No Booking Yet
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flex: 1,
  },
});
