import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { plantsOfTheDay, plants } from "../static/data";
import { resizeMode } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { LinearGradient } from "expo-linear-gradient";
/*
    TO DO:
        - make the highlight for the panels only happen at single presses
        - make the panels snap to the screen
        - Automatically move the panels when not touched - /
        

*/

export default function PlantCarousel() {
  screenWidth = Math.round(Dimensions.get("window").width);
  const indexChecker = (index) => {
    if (index == 3) {
      setTimeout(() => {
        this._carousel.snapToItem(0, (animated = true), (fireCallback = true));
      }, 3000);
    }
  };

  state = {
    plantsOfTheDay,
    activeSlide: 0,
  };
  _renderItem = ({ item }) => {
    const imagePaths = {
      12: require("../media/12.jpg"),
      19: require("../media/19.jpg"),
      21: require("../media/21.jpg"),
      26: require("../media/26.jpg"),
    };
    const imageSource = imagePaths[item.thumbnailImage];

    const handlePress = () => {
      console.log("Plant Carousel Item Pressed");
    };

    return (
      
      <TouchableHighlight underlayColor="#F9EBC7"  onPress={handlePress} style={styles.backgroundImage}>
      <ImageBackground
        source={imageSource}
        style={styles.backgroundImage}
      >
        
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
        data={this.state.plantsOfTheDay}
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
