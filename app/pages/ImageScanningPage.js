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
import { globalText } from "../static/styleAssets";
const ImageScanningPage = ({ navigation }) => {
  const route = useRoute();
  const { capturedImage } = route.params;
  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };

  const goback = () => {
    navigation.navigate("CameraPage");
  };
  const proceed = () => {
    navigation.navigate("ScanningStartPage", { capturedImage });
  };

  const handleHome = () => {
    navigation.navigate("Homepage");
  };
  return (
    <View style={styles.main}>
      <Header
        onPressCallback={handleEncyclopediaButtonPressed}
        onPressCallbackHome={handleHome}
      />
      {capturedImage && (
        <ImageBackground
          style={styles.capturedImage}
          source={{ uri: capturedImage.uri }}
          resizeMode="cover"
        >
          <View style={styles.confirmationPanel1}></View>

          <View style={styles.confirmationPanel2}>
            <View style={styles.optionsPanel}>
              <Text style={[globalText.heading3Orange, {marginHorizontal:15}]}>
                Is this the picture you want scanned?
              </Text>
            </View>

            <View style={styles.optionsPanel}>
              <TouchableOpacity activeOpacity={0.6} onPress={proceed}>
                <View
                  style={{
                    backgroundColor: "#748c5b",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                    marginBottom : 8,
                  }}
                >
                  <Text
                    style={[globalText.paragraph1White, {  paddingVertical: 25 }]}
                  >
                    Proceed to Scan
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.6} onPress={goback}>
                <View
                  style={{
                    backgroundColor: "#fcfce4",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop : 8
                  }}
                >
                  <Text
                    style={[
                      globalText.paragraph1Orange,
                      {  paddingVertical: 25 },
                    ]}
                  >
                    Retake Image
                  </Text>
                </View>
              </TouchableOpacity>
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
  confirmationPanel1: {
    height: "70%",
    alignContent: "flex-end",
  },
  confirmationPanel2: {
    backgroundColor: "#f9ecc9cc",
    height: "30%",
    alignContent: "flex-end",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  optionsPanel: {
    
    justifyContent: "center",
    width: "50%",
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
    backgroundColor: "red",
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
