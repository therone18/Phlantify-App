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
  import { useRoute } from "@react-navigation/native";
  import { MaterialIcons } from "@expo/vector-icons";
  import React, { useRef, useState } from "react";
  const screenHeight = Dimensions.get("window").height;
  console.log(screenHeight);
  const PlantDetails = ({ navigation }) => {
    const handleEncyclopediaButtonPressed = () => {
        navigation.navigate("Encyclopedia");
      };
    
      const handleHome = () => {
        navigation.navigate("Homepage");
      };
    
    return (
      <SafeAreaView style={styles.main}>
        <Header onPressCallback={handleEncyclopediaButtonPressed} onPressCallbackHome={handleHome} />
        
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      flexDirection: "column",
      alignItmes: "center",
      backgroundColor: "#F9EBC7",
    }
  });
  
  export default PlantDetails;
  