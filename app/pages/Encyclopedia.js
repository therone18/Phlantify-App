import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import Header from "../components/Header";
import { imagePaths } from "../static/encylopediaImageSourcing";
import { LinearGradient } from "expo-linear-gradient";
import { plants } from "../static/data";
import { globalText } from "../static/styleAssets";
import { AntDesign } from "@expo/vector-icons";
import MenuBar from "../components/MenuBar";
const Encyclopedia = ({ navigation }) => {
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

  const handlePress = (plantID) => {
    console.log(plantID);
    navigation.navigate("PlantDetails", { plantID: plantID });
  };

  function sortArrayByKey(array, key) {
    return array.sort((a, b) => {
      const nameA = a[key].toUpperCase();
      const nameB = b[key].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  const sortedPlants = sortArrayByKey(plants, "plantName_Local");

  return (
    <SafeAreaView style={styles.main}>
      <Header
        onPressCallback={handleEncyclopediaButtonPressed}
        onPressCallbackHome={handleHome}
      />
      <Text
        style={[
          globalText.heading1Green,
          { marginHorizontal: 30, marginBottom: 16, marginTop: 20 },
        ]}
      >
        Plant Encyclopedia
      </Text>

      <ScrollView>
        {sortedPlants.map((item, index) => (
          <TouchableHighlight
            underlayColor="#F9EBC7"
            onPress={() => handlePress(item["plantID"])}
          >
            <ImageBackground
              source={item["sourceImage"]}
              style={styles.itemContainer}
            >
              <LinearGradient
                colors={["#C4661FCC", "#00000000"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.gradient}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <View>
                    <Text style={globalText.paragraph1White}>
                      {item["plantName_Family"]}
                    </Text>
                    <Text style={globalText.heading3White}>
                      {item["plantName_Local"]}
                    </Text>
                  </View>

                  <View style={{ justifyContent: "center" }}>
                    <AntDesign name="caretright" size={33} color="white" />
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </TouchableHighlight>
        ))}
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

  itemContainer: {
    marginVertical: 8,
    minHeight: 100,
  },
  gradient: {
    flex: 1,
    height: "100%",
    justifyContent: "center", // Items at the bottom
    alignItems: "flex-start",
    paddingHorizontal: 30, // Items at the left,
  },
});

export default Encyclopedia;
