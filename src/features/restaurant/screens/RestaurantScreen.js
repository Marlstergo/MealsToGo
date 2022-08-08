import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { Text } from "react-native";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.divider} />
      <View style={styles.list}>
        <Text>lists</Text>
      </View>
    </SafeAreaView>
  );
};
const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ddd",
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },

  search: {
    backgroundColor: "green",
    height: 90,
    padding: 10,
    justifyContent: "center",
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 10,
  },
  divider: {
    backgroundColor: "purple",
    height: 2,
  },
});

export default RestaurantScreen;
