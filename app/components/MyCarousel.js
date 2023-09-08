import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';


export default class MyCarousel extends React.Component {
  state = {
    entries: [
      { title: 'Item 1', image: '../media/12.jpg' },
      { title: 'Item 2', image: '../media/19.jpg' },
      // Add more items as needed
    ],
    activeSlide: 0,
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={300}
          itemWidth={200}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />
        <Pagination
          dotsLength={this.state.entries.length}
          activeDotIndex={this.state.activeSlide}
          containerStyle={{ backgroundColor: 'transparent' }}
          dotStyle={{ width: 10, height: 10, borderRadius: 5, marginHorizontal: 8, backgroundColor: 'blue' }}
          inactiveDotStyle={{ backgroundColor: 'gray' }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
});
