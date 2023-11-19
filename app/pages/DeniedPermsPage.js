import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import { imagePaths } from "../static/encylopediaImageSourcing";
import { LinearGradient } from "expo-linear-gradient";
import { plants } from "../static/data";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
const DeniedPermsPage = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Disable going back by returning true
        return true;
      };

      // Override the default behavior of the hardware back button
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      // Clean up the event listener on component unmount
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };

  const handleHome = () => {
    navigation.navigate("Homepage");
  };
  

  return (
    <SafeAreaView style={styles.main}>
      <Header onPressCallback={handleEncyclopediaButtonPressed} onPressCallbackHome={handleHome} />
      <ImageBackground
        style={styles.itemContainer}
        source={require("../media/mascotCorner.png")}
        resizeMode= "cover"
      >

      <View style={styles.mainMessage}>
        <Text style={styles.oops}>Oops...</Text>
        <Text style={styles.oopsMessage}>
          I don't think I can access your camera...
        </Text>
      </View>
      
        <View style={styles.instructionMessage}>
          
          <View style={styles.instructionContainer}>
            <Text style = {styles.instruction}>Please check your security and/or permission settings to allow Phlantify camera access</Text>
           
          </View>
          
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItmes: "center",
    backgroundColor: "#F9EBC7",
  },
  mainMessage: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  instructionMessage: {
    flexDirection: "row",

    height: "70%",
    justifyContent: "Center", // Items at the bottom
  },
  phlantyContainer: {
    flex: 1,

    width: "50%",
  },
  instructionContainer: {
    flex: 1,

    width: "50%",
  },
  oops: {
    color: "#C4661F",
    fontSize: 50,
    fontWeight: "600",
    paddingHorizontal: 60,
    width: "100%",
  },
  oopsMessage: {
    width: "100%",
    paddingHorizontal: 60,
    fontSize: 20,
    fontWeight: "300",
  },
  instruction:{
    width: "100%",
    paddingHorizontal: 60,
    fontSize: 20,
    fontWeight: "300",
  }
});
export default DeniedPermsPage;
