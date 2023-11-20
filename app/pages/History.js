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
import { historyPlants } from "../static/data";
const History = ({ navigation }) => {
  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };

  const handlePress = (plantID, historyDetails) => {
    console.log(plantID);
    navigation.navigate('HistoryProfile', {plantID: plantID, historyDetails: historyDetails})
  };
  const handleHome = () => {
    navigation.navigate("Homepage");
  };

 
  function findPlantName(plantID){
    let foundPlant = plants.find(plant => plant.plantID === plantID);
    return foundPlant.plantName_Local
  }

  function findsourceImage(plantID){
    let foundPlant = plants.find(plant => plant.plantID === plantID);
    return foundPlant.sourceImage
  }

  const moment = require('moment');
  function findDateTime(dateTime){
    // Parse the date string using the format "YYYY-MM-DD_HH:mm-A"
    let date = moment(dateTime, "YYYY-MM-DD_HH:mm-A");

    // Format the date into a more readable format
    let formattedDate = date.format("MMMM Do YYYY, h:mm A");

    return formattedDate;
  }

  return (
    <SafeAreaView style={styles.main}>
      <Header onPressCallback={handleEncyclopediaButtonPressed} onPressCallbackHome={handleHome} />
      <Text style={styles.titletext}>History</Text>

      <ScrollView>
        {historyPlants.map((item, index) => (


          <TouchableHighlight underlayColor="#F9EBC7" onPress={() => handlePress(item["plantID"], item)}>
          <ImageBackground
            style={styles.itemContainer}
            source={findsourceImage(item.plantID)}
          >
            <LinearGradient
              colors={["#C4661FCC", "#00000000"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.itemsubtitletext}>
                {findDateTime(item.dateScanned)}
              </Text>
              <Text key={item["plantID"]} style={styles.itemtitletext}>
                {findPlantName(item.plantID)}
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

export default History;
