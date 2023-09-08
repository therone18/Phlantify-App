import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import PlantCarousel from "../components/PlantCarousel";
import MyCarousel from "../components/MyCarousel";
//Homepage should show history of previously identified plants - 
//Homepage should show panels of plants and their descriptions - /
//Homepage should have a button to direct to Camera feature activity - 
//Homepage should have a button to direct to plant encyclopedia activity   - 

//Should Always show the header

const Homepage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.centeredText}>Link to Encyclopedia Goes Here</Text>

        <Text>Plants of the Day</Text>
        <PlantCarousel />
      </View>

      <View style={styles.container}>
        <Text style={styles.centeredText}>Plant History Goes Here</Text>
      </View>

      <View style={styles.container}>
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
  },
  centeredText: {
    textAlign: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9EBC7",
    height: 100,
  },
});

export default Homepage;
