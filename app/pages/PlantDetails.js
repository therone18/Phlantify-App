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
import MenuBar from "../components/MenuBar";
const screenHeight = Dimensions.get("window").height;
console.log(screenHeight);
const PlantDetails = ({ navigation }) => {
  const route = useRoute();
  const plantID = route.params.plantID;
  var plantDetails;
  plants.forEach((item) => {
    if (item["plantID"] == plantID) {
      plantDetails = item;
    }
  });

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
  
  const scrollViewRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    setContentHeight(contentHeight);
  };

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;

    setScrollY(y);
    setAtTop(y === 0);
    setAtBottom(
      y + event.nativeEvent.layoutMeasurement.height >= contentHeight
    );
  };

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  console.log(atBottom);
  console.log(atTop);

  var partsUsed;
  var usedFor;

  if (plantDetails["plantPart"].length > 1) {
    partsUsed = plantDetails["plantPart"].join(", ");
  } else {
    partsUsed = plantDetails["plantPart"];
  }

  if (plantDetails["plantMedUse"].length > 1) {
    usedFor = plantDetails["plantMedUse"].join(", ");
  } else {
    usedFor = plantDetails["plantMedUse"];
  }

  const [isFirstActive, setIsFirstActive] = useState(true);

  const handleFirstButtonPress = () => {
    setIsFirstActive(true);
  };

  const handleSecondButtonPress = () => {
    setIsFirstActive(false);
  };

  return (
    <SafeAreaView style={styles.main}>
      <Header onPressCallback={handleEncyclopediaButtonPressed} onPressCallbackHome={handleHome} />
      <ImageBackground
        style={styles.itemContainer}
        source={plantDetails["sourceImage"]}
        resizeMode="cover"
      >
        <ScrollView
          style={styles.mainContent}
          bounces={false}
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollViewContent}
          onContentSizeChange={handleContentSizeChange}
          onScroll={handleScroll}
        >
          <LinearGradient
            colors={["#C4661F99", "#00000000"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradient}
          >
            <View style={styles.gradientContentContainter}>
              <View style={styles.titleContainter}>
                <Text style={styles.subtitletext}>
                  {plantDetails["plantName_Family"]}
                </Text>
                <Text style={styles.titletext}>
                  {plantDetails["plantName_Local"]}
                </Text>
              </View>
            </View>

            <View style={{ width: "100%", alignItems: "center" }}>
              {atTop && (
                <TouchableHighlight
                  style={{ width: "100%", alignItems: "center" }}
                  onPress={scrollToBottom}
                  underlayColor="#C4661F" // Set the color when the touch is active
                  activeOpacity={0.6} // Set the opacity when the touch is active
                >
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={60}
                    color="white"
                  />
                </TouchableHighlight>
              )}

              {atBottom && (
                <TouchableHighlight
                  style={{ width: "100%", alignItems: "center" }}
                  onPress={scrollToTop}
                  underlayColor="#C4661F" // Set the color when the touch is active
                  activeOpacity={0.6} // Set the opacity when the touch is active
                >
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={60}
                    color="white"
                  />
                </TouchableHighlight>
              )}

              {!atTop && !atBottom && (
                <TouchableHighlight
                  style={{ width: "100%", alignItems: "center" }}
                  onPress={scrollToTop}
                  underlayColor="#C4661F" // Set the color when the touch is active
                  activeOpacity={0.6} // Set the opacity when the touch is active
                >
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={60}
                    color="white"
                  />
                </TouchableHighlight>
              )}
            </View>
          </LinearGradient>
          <View style={styles.plantPanel}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={[
                  styles.button,
                  isFirstActive ? styles.activeButton : styles.disabledButton,
                ]}
                onPress={handleFirstButtonPress}
                disabled={isFirstActive}
              >
                <Text style={styles.buttonText}>Plant Info</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  !isFirstActive ? styles.activeButton : styles.disabledButton,
                ]}
                onPress={handleSecondButtonPress}
                disabled={!isFirstActive}
              >
                <Text style={styles.buttonText}>Medicinal Info</Text>
              </TouchableOpacity>
            </View>

            {isFirstActive ? (
              <ScrollView style={{marginTop: 20, marginHorizontal: 10}}>
                <Text style={styles.plantContentTitle}>General Info</Text>
                <Text style={styles.plantContentText}>
                {plantDetails["plantGenInfo"]}
                </Text>

                <Text style={styles.plantContentTitle}>Plant Description</Text>
                <Text style={styles.plantContentText}>
                {plantDetails["plantBotany"]}
                </Text>
              </ScrollView>
            ) : (
              <View style={{marginTop: 20, marginHorizontal: 10}}>
                <Text style={styles.plantContentTitle}>Parts Used: </Text>
                <Text style={styles.plantContentText}>{partsUsed}</Text>

                <Text style={styles.plantContentTitle}>Used For:</Text>
                <Text style={styles.plantContentText}>{usedFor}</Text>

                <Text style={styles.plantContentTitle}>How It's Used:</Text>
                <Text style={styles.plantContentText}>
                  {plantDetails["plantPrep"]}
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
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
  plantContentTitle: {
    fontSize: 25,
    fontWeight: "600",
    paddingTop: 15,
    paddingHorizontal: 10,
    color: "#C4661F"
  },
  plantContentText: {
    fontSize: 15,
    paddingTop: 5,
    paddingHorizontal: 10,
  },

  mainContent: {},

  plantPanel: {
    height: screenHeight - 300,
    backgroundColor: "#F9EBC7",
  },

  titleContainter: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  gradientContentContainter: {
    alignItems: "center",
  },

  titletext: {
    color: "white",
    fontSize: 35,
    fontWeight: "600",
  },
  subtitletext: {
    color: "white",
    fontSize: 25,
    fontWeight: "200",
  },

  itemtitletext: {
    paddingHorizontal: 15,
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    paddingBottom: 15,
  },
  itemsubtitletext: {
    paddingHorizontal: 15,
    color: "white",
    fontSize: 15,
    fontWeight: "400",
  },

  itemContainer: {
    flex: 1,
  },
  gradient: {
    height: screenHeight - 135,
    justifyContent: "flex-end", // Items at the bottom
    alignItems: "flex-start",
  },

  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 0,
    width: "50%",
  },
  activeButton: {
    backgroundColor: "#C4661F", // Change color for active state
  },
  disabledButton: {
    backgroundColor: "#DD8E56", // Change color for disabled state
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default PlantDetails;
