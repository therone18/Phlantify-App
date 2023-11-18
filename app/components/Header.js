import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import { Entypo, MaterialCommunityIcons, FontAwesome5, MaterialIcons  } from "@expo/vector-icons";


export default function Header({onPressCallback}) {
  const handlePress = () => {
        
    console.log("pressed")
    if (onPressCallback){
      onPressCallback()
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Entypo name="leaf" size={30} color="white" />
        </View>

        <View style={styles.topmenu}>
          <TouchableOpacity onPress={handlePress} >
            <FontAwesome5 
              name="book"
              size={30}
              color="white"
              
            />
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
    backgroundColor: "#C4661F",
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
