import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";

const ImageScanningPage = ({ navigation }) => {
  const route = useRoute();
  const { capturedImage } = route.params;
  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };

  const goback = () =>{
    navigation.navigate("CameraPage");
  }
  const proceed = () =>{
    navigation.navigate("ScanningStartPage", { capturedImage });
  }
  return (
    <View style={styles.main}>
      <Header onPressCallback={handleEncyclopediaButtonPressed} />
      {capturedImage && (
        <ImageBackground
          style={styles.capturedImage}
          source={{ uri: capturedImage.uri }}
          resizeMode="cover"
        >
          <View style={styles.options}>
            <View style={styles.optionItems}>
              <TouchableHighlight
                style={styles.goback}
                underlayColor="#C4661F" // Set the color when the touch is active
                activeOpacity={0.6}
                onPress={goback}
              >
                <Text style={styles.buttonText}>Go back to camera</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.proceed}
                underlayColor="#C4661F" // Set the color when the touch is active
                activeOpacity={0.6}
                onPress={proceed}
              >
                <Text style={styles.buttonText}>Begin Scan</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItmes: "center",
    backgroundColor: "#F9EBC7",
  },
  swtichCam: {
    backgroundColor: "#C4661F",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  itemContainer: {
    width: "100%",
    backgroundColor: "#C4661F",
    justifyContent: "center",
    alignItems: "center",
  },
  capturedImage: {
    flex: 1,
  },
  options: {
    flex: 1,
    marginLeft: 36,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  optionItems: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    
  },
  goback: {
    width: "50%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 0,
    backgroundColor: "#C4661F",
  },
  proceed: {
    width: "50%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 0,
    backgroundColor: "#C4471F",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    
  },
});

export default ImageScanningPage;
