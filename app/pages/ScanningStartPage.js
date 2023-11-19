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
const screenHeight = Dimensions.get("window").height;

const ScanningStartPage = ({ navigation }) => {
  const route = useRoute();
  const { capturedImage } = route.params;
  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0)
  const [currentProgressNotes, setCurrentProgressNotes] = useState("Starting Scan")

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < sampleResults.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setCurrentProgress(sampleResults[currentIndex]["progressPercent"]);
        setCurrentProgressNotes(sampleResults[currentIndex]["notes"]);
        console.log(currentProgress)

      } else {
        // Set showView to true when reaching 100 progress
        clearTimeout(timer); // Stop the timer when all items are rendered
        setLoaded(true); 
      }
    }, 1000); // Adjust the delay time in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timer);
  }, [currentIndex, sampleResults]);

  console.log(loaded)

  const renderContentBasedOnProgress = (progress) => {
    switch (progress) {
      case 10:
        return (
          <View style={{ backgroundColor: "#F9EBC7BF", height: "10%" }}></View>
        );
      case 30:
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
          <View style={{ backgroundColor: "#F9EBC7BF", height: "100%" }}></View>
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
  return (
    <View style={styles.main}>
      <Header onPressCallback={handleEncyclopediaButtonPressed} />
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
          <View style={{ height: screenHeight - 230 }}></View>
          <View style={styles.results}>
            <View style={styles.topTitleContainer}>
              {!loaded ? (
                
                <Text style={styles.progress}>{`Progress: ${currentProgress}% ${currentProgressNotes}`}</Text>
              ) : (
                <Text style={styles.text}>PLANT NAME HERE</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
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
    width: "100%",
    alignItems: "center",
  },
  topTitleContent: {},
});

export default ScanningStartPage;
