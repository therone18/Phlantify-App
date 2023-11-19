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
const Encyclopedia = ({ navigation }) => {
  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };

  const handlePress = (plantID) => {
    console.log(plantID);
    navigation.navigate('PlantDetails', {plantID: plantID})
  };
  const handleHome = () => {
    navigation.navigate("Homepage");
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

  const sortedPlants = sortArrayByKey(plants, 'plantName_Local');


  return (
    <SafeAreaView style={styles.main}>
      <Header onPressCallback={handleEncyclopediaButtonPressed} onPressCallbackHome={handleHome} />
      <Text style={styles.titletext}>Encyclopedia</Text>

      <ScrollView>
        {sortedPlants.map((item, index) => (


          <TouchableHighlight underlayColor="#F9EBC7" onPress={() => handlePress(item["plantID"])}>
          <ImageBackground
            style={styles.itemContainer}
            source={item["sourceImage"]}
          >
            <LinearGradient
              colors={["#C4661FCC", "#00000000"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.itemsubtitletext}>
                {item["plantName_Family"]}{" "}
              </Text>
              <Text key={item["plantID"]} style={styles.itemtitletext}>
                {item["plantName_Local"]}
              </Text>
            </LinearGradient>
          </ImageBackground>

          </TouchableHighlight>


        ))}
      </ScrollView>
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

  titletext: {
    paddingHorizontal: 15,
    paddingTop: 15,
    color: "#783D19",
    fontSize: 40,
    fontWeight: "600",
  },

  itemtitletext: {
    paddingHorizontal: 15,
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    paddingBottom:15
  },
  itemsubtitletext: {
    paddingHorizontal: 15,
    color: "white",
    fontSize: 15,
    fontWeight: "400",
  },

  itemContainer: {
    flex: 1,
    marginVertical: 5,
    paddingTop: 30,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  },
  gradient: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end", // Items at the bottom
    alignItems: "flex-start", // Items at the left
  },
});

export default Encyclopedia;
