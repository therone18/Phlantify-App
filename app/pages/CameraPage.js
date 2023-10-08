import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const CameraPage = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    //LOAD MODEL HERE
    // Request camera permission
  }, []);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const handleCameraSwitch = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={cameraType}
        onCameraReady={() => console.log("Camera is ready")}
        onMountError={(error) => console.error("Camera mount error", error)}
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
        <TouchableOpacity activeOpacity={0.9}>
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
