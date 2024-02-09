import { View, Text, ScrollView } from "react-native";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessList from "./BusinessList";
import { Fragment } from "react";

export default function HomeScreen() {
  return (
    <Fragment>
      <Header />
      <ScrollView>
        <Slider />
        <Categories />
        <BusinessList />
      </ScrollView>
    </Fragment>
  );
}
