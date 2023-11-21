import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import PlantCarousel from "../components/PlantCarousel";
import HistoryCarousel from "../components/HistoryCarousel";
import Header from "../components/Header";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import CameraScreenButton from "../components/MenuBar";
import MenuBar from "../components/MenuBar";
import { colors, globalText } from "../static/styleAssets";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";


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
  const handleCredits = () => {
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
      <ScrollView>
        <View style={styles.container}>
          <Text style={[globalText.heading1Green, { marginBottom: 24 }]}>
            Let's Phlantify!
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                width: "40%",
                minHeight: 270,
                justifyContent: "center",
                marginVertical: 12
              }}
            >
              <View>
                <Text style={globalText.paragraph1Orange}>
                  Phlanty is ready to explore and discover a plants together
                  with you!
                </Text>
              </View>

              <TouchableOpacity style={{ flexDirection: "row" , marginVertical: 12}} onPress={handleCameraButtonPressed}>
                <View style={{ margin: 5 }}>
                  <MaterialCommunityIcons
                    name="line-scan"
                    size={46}
                    color={"#748c5b"}
                  />
                </View>
                <View style={{ justifyContent: "center", marginLeft: 4 }}>
                  <Text style={{ fontSize: 18, color: "#c4661f" }}>
                    Scan Now
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "60%",
                minHeight: 270,
                marginHorizontal: 20
              }}
            >
              <Image
                style={{ height: 270, width: "100%" }}
                resizeMode="contain"
                source={require("../media/phlantySmiling.png")}
              />
            </View>
          </View>
        </View>

        <View style={styles.containerPlants}>
          <Text style={[globalText.heading1Green, {marginHorizontal: 30, marginBottom:25} ]}>Plants of the Day</Text>
          <PlantCarousel />
        </View>

        <View style={styles.containerHistory}>
          <Text style={[globalText.heading1Green, {marginHorizontal: 30, marginBottom:25}]}>Recent Plant Scans</Text>
          <HistoryCarousel onPressHistory={handleHistory} />
        </View>
      </ScrollView>
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
    height: 320,
    paddingVertical:50
  },
  containerPlants: {
    flex: 1,
    height: 320,
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
  container: {
    marginHorizontal: 30,
  },
});

export default Homepage;
