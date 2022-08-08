import {
  // SafeAreaView,
  // StyleSheet,
  // Text,
  // View,
  // Platform,
  StatusBar,
  React,
} from "react-native";
import RestaurantScreen from "./src/features/restaurant/screens/RestaurantScreen";

export default function App() {
  console.log(StatusBar.currentHeight);
  return (
    <>
      <RestaurantScreen />
    </>
  );
}
