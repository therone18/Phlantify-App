import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import PlantCarousel from "../components/PlantCarousel";
import HistoryCarousel from "../components/HistoryCarousel";
import Header from "../components/Header";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import CameraScreenButton from "../components/MenuBar";
import MenuBar from "../components/MenuBar";

//Homepage should show history of previously identified plants -
//Homepage should show panels of plants and their descriptions - /
//Homepage should have a button to direct to Camera feature activity -
//Homepage should have a button to direct to plant encyclopedia activity   -
//Should Always show the header

const Homepage = ({ navigation }) => {
  const handleCameraButtonPressed = () => {
    navigation.navigate("CameraPage");
  };

  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
    console.log("Goin Encylopedia");
  };

  const handleHome = () => {
    navigation.navigate("Homepage");
    console.log("Goin Home");
  };
  const handleHistory = () => {
    navigation.navigate("History");
    console.log("Goin History");
  };
  const handleCredits= () => {
    navigation.navigate("AboutUs");
    console.log("Goin AboutUs");
  };

  return (
    <SafeAreaView style={styles.main}>
      <View></View>
      <Header
        onPressCallback={handleEncyclopediaButtonPressed}
        onPressCallbackHome={handleHome}
      />

      <View style={styles.containerPlants}>
        <Text style={styles.titletext}>Plants of the Day</Text>
        <PlantCarousel />
      </View>

      <View style={styles.containerHistory}>
        <Text style={styles.titletext}>Your Recent Plant Scans</Text>
        <HistoryCarousel onPressHistory={handleHistory} />
      </View>

      <View>
        <MenuBar
          onPressHome={handleHome}
          onPressEncyclopedia={handleEncyclopediaButtonPressed}
          onPressScan={handleCameraButtonPressed}
          onPressHistory={handleHistory}
          onCredits={handleCredits}
        />
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
    height: "11%",

    marginTop: 15,
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
