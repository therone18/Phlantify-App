import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import { sampleResults } from "../static/data";
import * as FileSystem from "expo-file-system";
import MenuBar from "../components/MenuBar";
import { globalText } from "../static/styleAssets";
import { colors } from "../static/styleAssets";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";
const screenHeight = Dimensions.get("window").height;

import { plants } from "../static/data";
const ScanningStartPage = ({ navigation }) => {
  const [plantHighest, setplantHighest] = useState("");
  const [plant, setPlant] = useState("");
  const [plantPercent, setPlantPercent] = useState("");

  const handleCameraButtonPressed = () => {
    navigation.navigate("CameraPage");
  };

  const handleHistory = () => {
    navigation.navigate("History");
    console.log("Goin History");
  };
  const handleCredits = () => {
    navigation.navigate("AboutUs");
    console.log("Goin AboutUs");
  };

  const route = useRoute();
  const { capturedImage } = route.params;

  const sendPicture = async () => {
    console.log("Sending picture to api");

    let formData = new FormData();

    formData.append("image", {
      uri: capturedImage.uri,
      type: "image/jpeg",
      name: "capturedImage.jpg",
    });

    const response = await fetch("http://192.168.1.10:5000/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    console.log("Image sent successfully");
    const data = await response.json();
    console.log(data);

    let maxKey = Object.entries(data).reduce(
      (maxKey, [key, value]) => (value > data[maxKey] ? key : maxKey),
      Object.keys(data)[0]
    );

    setplantHighest(maxKey);
    foundPlant = plants.find((item) => item["plantID"] === maxKey);
    setPlant(foundPlant);
    maxValue = data[maxKey];
    setPlantPercent((maxValue * 100).toFixed(2));
  };

  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };

  const handleHome = () => {
    navigation.navigate("Homepage");
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentProgressNotes, setCurrentProgressNotes] =
    useState("Starting Scan");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < sampleResults.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setCurrentProgress(sampleResults[currentIndex]["progressPercent"]);
        setCurrentProgressNotes(sampleResults[currentIndex]["notes"]);
        console.log(currentProgress);
      } else {
        // Set showView to true when reaching 100 progress
        clearTimeout(timer); // Stop the timer when all items are rendered
        setLoaded(true);
      }
    }, 1000); // Adjust the delay time in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timer);
  }, [currentIndex, sampleResults]);

  console.log(loaded);

  const renderContentBasedOnProgress = (progress) => {
    switch (progress) {
      case 10:
        return (
          <View style={{ backgroundColor: "#F9EBC7BF", height: "10%" }}></View>
        );
      case 30:
        sendPicture();
        return (
          <View style={{ backgroundColor: "#F9EBC7BF", height: "30%" }}></View>
        );
      case 50:
        return (
          <View style={{ backgroundColor: "#F9EBC7BF", height: "50%" }}></View>
        );
      case 70:
        return (
          <View style={{ backgroundColor: "#F9EBC7BF", height: "70%" }}></View>
        );
      case 80:
        return (
          <View style={{ backgroundColor: "#F9EBC7BF", height: "80%" }}></View>
        );
      case 100:
        scanComplete();

        return (
          <View style={{ backgroundColor: "#F9EBC7BF", height: "0%" }}></View>
        );
      default:
        return null;
    }
  };
  const scrollViewRef = useRef(null);
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  const scanComplete = () => {
    console.log("Scan complete");
    scrollToBottom();
  };

  const handlePress = (plantID) => {
    console.log(plantID);
    navigation.navigate("PlantDetails", { plantID: plantID });
  };
  return (
    <View style={styles.main}>
      <Header
        onPressCallback={handleEncyclopediaButtonPressed}
        onPressCallbackHome={handleHome}
      />
      <ImageBackground
        style={styles.capturedImage}
        source={{ uri: capturedImage.uri }}
        resizeMode="cover"
      >
        <View style={styles.scanningBox}>
          {currentIndex < sampleResults.length &&
            renderContentBasedOnProgress(
              sampleResults[currentIndex]["progressPercent"]
            )}
        </View>

        <ScrollView
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
          bounces={false}
          ref={scrollViewRef}
        >
          <View style={{ height: screenHeight - 300 }}></View>
          <View style={styles.results}>
            <View style={styles.topTitleContainer}>
              {!loaded ? (
                <Text
                  style={styles.progress}
                >{`Progress: ${currentProgress}% ${currentProgressNotes}`}</Text>
              ) : (
                <Text
                  style={[
                    globalText.heading2White,
                    { marginHorizontal: 10, marginVertical: 15 },
                  ]}
                >
                  {plantPercent}% sure that this is {plant["plantName_Local"]}!
                </Text>
              )}
            </View>

            <View style={{ marginHorizontal: 20, marginVertical: 150 }}>
              <View style={{ marginBottom: 22 }}>
                <Text style={globalText.heading2Green}>Scanned Plant</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text
                    style={{
                      color: "#748c5b",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Accuracy:
                  </Text>
                  <Text
                    style={[globalText.paragraph2Orange, { marginBottom: 18 }]}
                  >
                    Phlanty thinks that the plant scanned is a{" "}
                    {plant["plantName_Local"]}, Phlanty is {plantPercent}% sure!
                  </Text>
                  <TouchableOpacity
                    // Set the color when the touch is active
                    activeOpacity={0.6}
                    onPress={() => handlePress(plant["plantID"])}
                  >
                    <View
                      style={{
                        backgroundColor: "#748c5b",
                        marginRight: 10,
                        marginTop: 20,
                        padding: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ color: "white" }}>View Plant</Text>
                      <View style={{ marginRight: 10 }}>
                        <AntDesign name="arrowright" size={24} color="white" />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <View
                  style={{ backgroundColor: "green", width: 200, height: 200 }}
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={plant["sourceImage"]}
                  />
                </View>
              </View>
            </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItmes: "center",
    justifyContent: "center",
    backgroundColor: "#F9EBC7",
  },
  capturedImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    fontSize: 30,
    color: "#C4661F",
    fontWeight: "bold",
  },
  progress: {
    padding: 10,
    fontSize: 22,
    color: "black",
    fontWeight: "300",
  },
  container: {
    width: "100%",
    backgroundColor: "#C4661F",
    justifyContent: "center",
    alignItems: "center",
  },
  scanningBox: {
    flex: 1,
    margin: 120,
    height: "50%",
    width: "70%",
    borderWidth: 4,
    borderColor: "#C4661F",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  results: {
    height: screenHeight - 200,
    backgroundColor: "#F9EBC7",
  },
  topTitleContainer: {
    backgroundColor: "#c4661f",
    width: "100%",
    alignItems: "center",
  },
  topTitleContent: {},
});

export default ScanningStartPage;
