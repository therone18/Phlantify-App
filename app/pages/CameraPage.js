import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
const CameraPage = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };
  useEffect(() => {
    //LOAD MODEL HERE
    // Request camera permission
  }, []);

  const [permission, requestPermission] = useState();
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      requestPermission(cameraPermission.status === "granted");
    })();
  }, []);

  const handleCameraSwitch = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (imageLoaded && capturedImage) {
      navigation.navigate('ImageScanning', { capturedImage });
    }
  }, [imageLoaded, capturedImage, navigation]);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setCapturedImage(photo);
      setImageLoaded(true);
    }
    
    
  };



  if (permission === undefined) {
    return <Text>Requesting Permissions</Text>;
  } else if (!permission) {
    navigation.navigate("DeniedPermsPage");
  }

  
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={cameraType}
        onCameraReady={() => console.log("Camera is ready")}
        onMountError={(error) => console.error("Camera mount error", error)}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={{ alignItems: "flex-end", margin: 20 }}>
          <TouchableOpacity activeOpacity={0.9} onPress={handleCameraSwitch}>
            <MaterialCommunityIcons
              name="camera-switch-outline"
              size={50}
              color="#C4661F"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 36,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="md-scan-outline" size={350} color="#C4661F99" />
          {/* Add UI components here, e.g., a switch button for camera */}
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={takePicture}>
          <View style={styles.container}>
            <Ionicons name="scan-circle" size={50} color="white" />
            <Text style={styles.text}>Scan Plant</Text>
          </View>
        </TouchableOpacity>
      </Camera>
      
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
  container: {
    width: "100%",
    backgroundColor: "#C4661F",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CameraPage;
