import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CameraScreenButton({onPressCallback}) {
  const handlePress = () => {
    console.log("Scan Button Pressed");
    if (onPressCallback){
      onPressCallback()
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
      <View style={styles.container}>
        <Ionicons name="scan-circle" size={50} color="white" />
        <Text style={styles.text}>New Scan</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C4661F",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
