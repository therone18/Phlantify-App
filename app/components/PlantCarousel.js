import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { plants } from "../static/data";
import { resizeMode } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { LinearGradient } from "expo-linear-gradient";



export default class PlantCarousel extends React.Component {
  screenWidth = Math.round(Dimensions.get("window").width);

  

  state = {
    plants,
    activeSlide: 0,
  };
  _renderItem = ({ item }) => {

    const imagePaths = {
        "12": require('../media/12.jpg'),
        "19": require('../media/19.jpg'),
        "21": require('../media/21.jpg'),
        "26": require('../media/26.jpg'),
      }
    const imageSource = imagePaths[item.thumbnailImage];


    return (
      <ImageBackground
        source={imageSource}
        style={styles.panel}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["#C4661FCC", "#00000000"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.panel}
        >
          <Text style={styles.title}>{item.localName}</Text>
          <Text style={styles.subtitle}>{item.scientificName}</Text>
        </LinearGradient>
      </ImageBackground>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          layout="default"
          renderItem={this._renderItem}
          data={this.state.plants}
          sliderWidth={this.screenWidth}
          itemWidth={this.screenWidth}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F9EBC7",
  },
  panel: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end", // Vertical alignment at the bottom
    alignItems: "flex-start", // Horizontal alignment on the left
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    fontStyle: "italic"
  },
});
