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
import { historyPlants, plants } from "../static/data";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
const screenHeight = Dimensions.get("window").height;
console.log(screenHeight);

const HistoryProfile = ({ navigation }) => {
  const moment = require("moment");
  function findDateTime(dateTime) {
    // Parse the date string using the format "YYYY-MM-DD_HH:mm-A"
    let date = moment(dateTime, "YYYY-MM-DD_HH:mm-A");

    // Format the date into a more readable format
    let formattedDate = date.format("MMMM Do YYYY, h:mm A");

    return formattedDate;
  }
  const route = useRoute();
  const plantID = route.params.plantID;

  console.log(historyDetails);
  var plantDetails;
  plants.forEach((item) => {
    if (item["plantID"] == plantID) {
      plantDetails = item;
    }
  });

  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };

  const handleHome = () => {
    navigation.navigate("Homepage");
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
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  };

  console.log(atBottom);
  console.log(atTop);
  const historyDetails = route.params.historyDetails;
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

  console.log(plantDetails);
  var accuracyResult =
    historyDetails["accuracy"] +
    "% sure that this is a " +
    plantDetails["plantName_Local"];
  var phlantyAccuracyResult =
    "Phlanty was " +
    historyDetails["accuracy"] +
    "% sure that this was a " +
    plantDetails["plantName_Local"];

    const handlePress = (plantID) => {
      console.log(plantID);
      navigation.navigate('PlantDetails', {plantID: plantID})
    };
  scrollToBottom();
  return (
    <SafeAreaView style={styles.main}>
      <Header
        onPressCallback={handleEncyclopediaButtonPressed}
        onPressCallbackHome={handleHome}
      />
      <ImageBackground
        style={styles.itemContainer}
        source={plantDetails["sourceImage"]}
        resizeMode="cover"
      >
        <ScrollView
          style={styles.mainContent}
          bounces={false}
          scrollEnabled={false}
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

            <View
              style={{ width: "100%", alignItems: "center", height: 30 }}
            ></View>
          </LinearGradient>
          <View style={styles.button}>
            <View style={[styles.button]}>
              <Text style={styles.buttonText}>{accuracyResult}</Text>
            </View>
          </View>

          <View style={styles.plantPanel}>
            <View style={{ marginTop: 20, marginHorizontal: 10 }}>
              <View>
                <Text>Scanned Plant</Text>
              </View>
              <View style={{ flexDirection: "row" }}>

                <View style={{ width: "40%", justifyContent: "center"}}>
                  <Text>Accuracy:</Text>
                  <Text>{phlantyAccuracyResult}</Text>
                  <TouchableHighlight
                    underlayColor="white" // Set the color when the touch is active
                    activeOpacity={0.6}
                    onPress={() => handlePress(plantID)}
                  >
                    <View style={{ backgroundColor: "#748c5b", marginRight: 10, padding:10, flexDirection:"row", justifyContent:"space-between"}}>
                      <Text style={{color:"white"}}>View Plant</Text>
                      <View style={{marginRight: 10}}>
                      <AntDesign name="arrowright" size={24} color="white" />
                      </View>
                      
                    </View>
                  </TouchableHighlight>
                </View>
                <View
                  style={{
                    width: "60%",
                    backgroundColor: "red",
                    minHeight: 250,
                  }}
                >
                  <Image
                    style={{ height: 250, width: "100%" }}
                    resizeMode="cover"
                    source={historyDetails.historyImage}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
  plantContentTitle: {
    fontSize: 25,
    fontWeight: "600",
    paddingTop: 15,
    paddingHorizontal: 10,
    color: "#C4661F",
  },
  plantContentText: {
    fontSize: 15,
    paddingTop: 5,
    paddingHorizontal: 10,
  },

  mainContent: {},

  plantPanel: {
    height: screenHeight - 370,
    backgroundColor: "#F9EBC7",
    justifyContent: "center",
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
    height: screenHeight - 150,
    justifyContent: "flex-end", // Items at the bottom
    alignItems: "flex-start",
  },

  button: {
    width: "100%",
    height: 71,
    backgroundColor: "#C4661F",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "#C4661F", // Change color for active state
  },
  disabledButton: {
    backgroundColor: "#DD8E56", // Change color for disabled state
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default HistoryProfile;
