import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { historyPlants } from "../static/data";
import { resizeMode } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { LinearGradient } from "expo-linear-gradient";

export default function HistoryCarousel() {
  screenWidth = Math.round(Dimensions.get("window").width);
  const indexChecker = (index) => {
    if (index == 3) {
      setTimeout(() => {
        this._carousel.snapToItem(0, (animated = true), (fireCallback = true));
      }, 3000);
    }
  };

  state = {
    historyPlants,
    activeSlide: 0,
  };

  _renderItem = ({ item }) => {
    const imagePaths = {
      7: require("../media/7.jpg"),
      32: require("../media/32.jpg"),
      59: require("../media/59.jpg"),
      65: require("../media/65.jpg"),
      102: require("../media/102.jpg"),
      201: require("../media/201.jpg"),
    };

    const imageSource = imagePaths[item.thumbnailImage];

    const handlePress = () => {
        console.log("History Carousel Item Pressed");
    };

    return (
      <TouchableHighlight
        underlayColor="#F9EBC7"
        onPress={handlePress}
        style={styles.backgroundImage}
      >
        <ImageBackground source={imageSource} style={styles.backgroundImage}>
          <LinearGradient
            colors={["#C4661FCC", "#00000000"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradient}
          >
            <View style={styles.plantDetails}>
              <Text style={styles.title}>{item.localName}</Text>
              <Text style={styles.subtitle}>{item.scientificName}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        renderItem={this._renderItem}
        data={this.state.historyPlants}
        sliderWidth={this.screenWidth}
        itemWidth={this.screenWidth}
        enableSnap={true}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={8000}
        ref={(c) => {
          this._carousel = c;
        }}
        onSnapToItem={() => indexChecker(this._carousel.currentIndex)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9EBC7",
    marginVertical: 10,
    height: "80%",
  },

  backgroundImage: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end", // Items at the bottom
    alignItems: "flex-start", // Items at the left
  },
  plantDetails: {
    padding: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    fontStyle: "italic",
  },
});
