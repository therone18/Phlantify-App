import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

export default function MenuBar({ onPressHome, onPressEncyclopedia, onPressScan, onPressHistory, onCredits }) {

  const handleHome = () => {
    if (onPressHome) {
      onPressHome();
    }
  };

  const handleEncyclopedia = () => {
    if (onPressEncyclopedia) {
      onPressEncyclopedia();
    }
  };

  const handleScan = () => {
    if (onPressScan) {
      onPressScan();
    }
  };

  const handleHistory = () => {;
    if (onPressHistory) {
      onPressHistory();
    }
  };

  const handleCredits = () => {
    if (onCredits) {
      onCredits();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={handleHome}>
        <View>
          <Ionicons name="home-outline" size={40} color="white" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} onPress={handleEncyclopedia}>
        <View>
          <Feather name="book" size={40} color="white" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} onPress={handleScan}>
        <View>
          <MaterialCommunityIcons name="line-scan" size={40} color="white" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} onPress={handleHistory}>
        <View>
          <MaterialCommunityIcons name="history" size={50} color="white" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} onPress={handleCredits}>
        <View>
          <Feather name="info" size={40} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 72,
    backgroundColor: "#C4661F",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 28
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
