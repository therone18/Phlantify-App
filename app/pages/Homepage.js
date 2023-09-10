import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import PlantCarousel from "../components/PlantCarousel";
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
      <Header />
      <View>
        <Text style={styles.titletext}>Plants of the Day</Text>
      </View>

      
      <PlantCarousel />
      
        
      

      <View style={styles.containerHistory}>
        <Text style={styles.centeredText}>Plant History Goes Here</Text>
      </View>

      <View style={styles.container} >
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
    height: "100%",
    backgroundColor: "#F9EBC7",
  },
  centeredText: {
    textAlign: "center",
  },
  containerHistory: {
    flex: 1,
    height: "100%",
    

  },
  titletext: {
    paddingHorizontal: 15,
    paddingTop: 20,
    color: "#783D19",
    fontSize: 25,
    fontWeight: "600",
  },
});

export default Homepage;
