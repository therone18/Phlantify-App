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
  Image,
} from "react-native";
import Header from "../components/Header";
import { imagePaths } from "../static/encylopediaImageSourcing";
import { LinearGradient } from "expo-linear-gradient";
import { plants } from "../static/data";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import MenuBar from "../components/MenuBar";
import { globalText } from "../static/styleAssets";
const screenHeight = Dimensions.get("window").height;
console.log(screenHeight);
const AboutUs = ({ navigation }) => {
  const handleCameraButtonPressed = () => {
    navigation.navigate("CameraPage");
  };

  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
    console.log("Goin Encylopedia");
  };

  const handleHome = () => {
    navigation.navigate("Homepage");
    console.log("Goin Home");
  };
  const handleHistory = () => {
    navigation.navigate("History");
    console.log("Goin History");
  };
  const handleCredits = () => {
    navigation.navigate("AboutUs");
    console.log("Goin AboutUs");
  };

  return (
    <SafeAreaView style={styles.main}>
      <Header
        onPressCallback={handleEncyclopediaButtonPressed}
        onPressCallbackHome={handleHome}
      />

      <ScrollView style={{ flex: 1, paddingHorizontal: 30 }}>
        <View style={styles.contentContainer}>
          <Text style={globalText.heading2Green}>Disclaimer</Text>
          <Text style={globalText.paragraph1Orange}>
            discussions on medicinal plants are for educational purposes only.
            The team, including Phlantie, does not endorse their use. We aim to
            promote awareness of Philippine medicinal plants. Any actual use
            should be consulted with healthcare professionals.
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={globalText.heading2Green}>About The Team</Text>
          <View>
            <View style={{ alignItems: "center" }}>
              <View style={styles.imageContainer}>
                <Image
                  style={{ width: 200, height: 200 }}
                  resizeMode="contain"
                  source={require("../media/theroneImage.jpg")}
                />
              </View>
              <Text style={globalText.heading3Green}>Therone Jhoseff Almadin</Text>
              <Text style={globalText.paragraph1Orange}>Lead App and Project Developer</Text>
              <Text style={globalText.paragraph1Orange}>Visual Artist</Text>
              
            </View>

            <View style={{ alignItems: "center" }}>
              <View style={styles.imageContainer}>
              <Image
                  style={{ width: 200, height: 200 }}
                  resizeMode="stretch"
                  source={require("../media/nathanImage.jpg")}
                />
              </View>
              <Text style={globalText.heading2Green}>Rafael Nathan Ang</Text>
              <Text>Developer</Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <View style={styles.imageContainer}>
              <Image
                  style={{ width: 200, height: 200 }}
                  resizeMode="contain"
                  source={require("../media/harrietteImage.jpg")}
                />
              </View>
              <Text style={globalText.heading2Green}>Harriette Haw</Text>
              <Text style={globalText.paragraph1Orange}>UI/UX Designer</Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <View style={styles.imageContainer}>
              <Image
                  style={{ width: 200, height: 200 }}
                  resizeMode="contain"
                  source={require("../media/phlantySmilingPFP.png")}
                 />
              </View>
              <Text style={globalText.heading2Green}>Phlantie</Text>
              <Text style={globalText.paragraph1Orange}>Project Leader</Text>
              <Text style={globalText.paragraph1Orange}>Phlantify App Guide</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <MenuBar
          onPressHome={handleHome}
          onPressEncyclopedia={handleEncyclopediaButtonPressed}
          onPressScan={handleCameraButtonPressed}
          onPressHistory={handleHistory}
          onCredits={handleCredits}
        />
      </View>
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
  contentContainer: {
    paddingVertical: 50,
  },
  imageContainer: {
    backgroundColor: "#748c5b",
    height: 200,
    width: 200,
    marginVertical: 20,
  },
});

export default AboutUs;
