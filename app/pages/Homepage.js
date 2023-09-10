import { View, Text, SafeAreaView, Button, StyleSheet, ScrollView } from "react-native";
import PlantCarousel from "../components/PlantCarousel";
import HistoryCarousel from "../components/HistoryCarousel";
import Header from "../components/Header";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";

//Homepage should show history of previously identified plants -
//Homepage should show panels of plants and their descriptions - /
//Homepage should have a button to direct to Camera feature activity -
//Homepage should have a button to direct to plant encyclopedia activity   -
//Should Always show the header

/*
    TODO:
        - Put "Plants of the day" on top of the Plant Carousel
        - Set up Child - to - Parent data passing
*/

const Homepage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>
      <View></View>
      <Header />

      <View style = {styles.containerPlants}>
        <Text style={styles.titletext}>Plants of the Day</Text>
        <PlantCarousel />
      </View>

      

      <View style={styles.containerHistory}>
        <Text style={styles.titletext}>Your Recent Plant Scans</Text>
        <HistoryCarousel/>
      </View>

      

      <View style={styles.containerCamera} >
        <Text style={styles.centeredText}>
          Link to Camera Feature Goes here
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItmes: "center",
    backgroundColor: "#F9EBC7",
  },
  centeredText: {
    textAlign: "center",
  },
  containerHistory: {
    flex: 1,
    height: "50%",
    

  },
  containerPlants: {
    flex: 1,
    height: "10%",

  },
  containerCamera: {
    
    height: "8%",
    backgroundColor: "#C4661F",
    marginTop: 15

  },
  titletext: {
    paddingHorizontal: 15,
    paddingTop: 15,
    color: "#783D19",
    fontSize: 25,
    fontWeight: "600",
  },
});

export default Homepage;
