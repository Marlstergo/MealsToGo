import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  React,
} from "react-native";
import { Searchbar } from "react-native-paper";
const isAndroid = Platform.OS === "android";

export default function App() {
  console.log(StatusBar.currentHeight);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.divider} />
      <View style={styles.list}>
        <Text>lists</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

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
