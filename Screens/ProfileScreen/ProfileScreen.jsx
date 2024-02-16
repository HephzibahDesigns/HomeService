import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../Utils/Color";
import { useAuth, useUser } from "@clerk/clerk-expo";

import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
    },

    {
      id: 2,
      name: "My booking",
      icon: "bookmark-sharp",
    },

    {
      id: 3,
      name: "Contact Us",
      icon: "mail",
    },

    {
      id: 4,
      name: "Logout",
      icon: "log-out",
    },
  ];

  const { user } = useUser();
  const { signOut } = useAuth();

  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{ padding: 20, paddingTop: 30, backgroundColor: Color.PRIMARY }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            color: Color.WHITE,
          }}
        >
          Profile
        </Text>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />

          <Text
            style={{
              fontSize: 26,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: Color.WHITE,
            }}
          >
            {user.fullName}
          </Text>

          <Text
            style={{
              fontSize: 18,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: Color.WHITE,
            }}
          >
            {user.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",

          alignItems: "flex-start",
          paddingTop: 50,
          paddingLeft: 30,
        }}
      >
        <FlatList
          data={profileMenu}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (item.name === "Home") {
                    navigation.navigate("HomeScreen");
                  }
                  if (item.id === 2) {
                    navigation.navigate("Booking");
                  }

                  if (item.id === 4) {
                    signOut();
                  }
                }}
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 25,
                }}
              >
                <Ionicons
                  name={item.icon}
                  size={40}
                  color={Color.MEDIUM_PRIMARY}
                />

                <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
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
    </View>
  );
}
