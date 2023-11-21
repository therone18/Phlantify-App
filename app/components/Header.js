import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

export default function Header({ onPressCallback, onPressCallbackHome  }) {
  const handlePress = () => {
    console.log("pressed");
    if (onPressCallback) {
      onPressCallback();
    }
  };

  const handleHome = () => {
    console.log("pressed");
    if (onPressCallbackHome) {
      onPressCallbackHome();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <TouchableOpacity onPress={handleHome}>
            <Entypo name="leaf" size={30} color="#c4661f" />
          </TouchableOpacity>
        </View>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "8%",
    backgroundColor: "#f9ecc9",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    fontStyle: "italic",
  },
  logo: {
    alignItems: "flex-start",
    width: "20%",
  },
  topmenu: {
    flex: 1,
    alignItems: "flex-end",
  },
});
