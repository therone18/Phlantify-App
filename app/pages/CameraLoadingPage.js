import React, { useEffect, useRef } from "react";
import {
  View,
  Animated,
  Easing,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CameraLoadingPage = ({ navigation }) => {
    const rotationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      const rotateImage = () => {
        Animated.loop(
          Animated.timing(rotationValue, {
            toValue: 1,
            duration: 3000, // Adjust the duration as needed
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ).start();
      };
  
      rotateImage();
    }, [rotationValue]);
  
    const rotate = rotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../media/mascotMiddlePLACEHOLDER.png')} // Replace with your background image path
        style={styles.backgroundImage}
      >
        <View style={styles.loaderContainer}>
          <Animated.Image
            source={require('../media/rotatingLoaderPLACEHOLDER.png')} // Replace with your loader image path
            style={[styles.loaderImage, { transform: [{ rotate }] }]}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9EBC7"
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'contain', // or 'contain' as per your requirement
        justifyContent: 'center',
      },
      loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      loaderImage: {
        width: 300, // Set the width of your loader image
        height: 300, // Set the height of your loader image
      },
});

export default CameraLoadingPage;
