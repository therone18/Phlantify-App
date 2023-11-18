import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useRoute } from '@react-navigation/native'

const ImageScanningPage = ({navigation}) => {
  const route = useRoute();
  const { capturedImage } = route.params;
  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate('Encyclopedia')
  }
  return (
    <View style ={styles.main}>
      <Header onPressCallback={handleEncyclopediaButtonPressed} />
      {capturedImage && (
        <Image source={{ uri: capturedImage.uri }} style={styles.capturedImage} />
      )}
    </View>
  )
}

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
  container: {
    width: "100%",
    backgroundColor: "#C4661F",
    justifyContent: "center",
    alignItems: "center",
  },
  capturedImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default ImageScanningPage