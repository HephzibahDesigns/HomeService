import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import Color from "../../Utils/Color";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoading } = useUser();
  // console.log(user?.imageUrl);

  if (user) {
    return (
      <View style={styles.container}>
        {/* Profile Bar */}
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: user.imageUrl,
              }}
              style={{ width: 45, height: 45, borderRadius: 99 }}
            />

            <View>
              <Text style={{ color: Color.WHITE }}>Welcome,</Text>
              <Text
                style={{ color: Color.WHITE, fontSize: 18, fontWeight: 500 }}
              >
                {user.fullName}
              </Text>
            </View>
          </View>

          <Ionicons name="bookmark-outline" size={27} color={Color.WHITE} />
        </View>

        {/* SearchBar */}
        <View style={styles.searchBar}>
          <TextInput style={styles.textInput} placeholder="Search Anything" />

          <Ionicons
            name="search"
            size={22}
            color={Color.PRIMARY}
            style={styles.searchIcon}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: Color.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  profileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  searchBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },

  textInput: {
    width: "85%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    fontSize: 15,
    backgroundColor: "white",
  },

  searchIcon: {
    padding: 8,
    backgroundColor: Color.WHITE,
    borderRadius: 5,
    alignSelf: "center",
  },
});
