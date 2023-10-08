import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
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
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          {/* Add UI components here, e.g., a switch button for camera */}
        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={handleCameraSwitch}>
          <View style={styles.container}>
            <Ionicons name="scan-circle" size={50} color="white" />
            <Text style={styles.text}>Switch Camera</Text>
          </View>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    
    backgroundColor: "#C4661F",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default CameraPage;
