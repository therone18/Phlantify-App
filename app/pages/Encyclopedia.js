import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Header from "../components/Header";
import { plants } from "../static/data";
const Encyclopedia = ({ navigation }) => {
  const handleEncyclopediaButtonPressed = () => {
    navigation.navigate("Encyclopedia");
  };
  return (
    <SafeAreaView style={styles.main}>
      <Header onPressCallback={handleEncyclopediaButtonPressed} />
      <Text style={styles.titletext}>Encyclopedia</Text>

      <ScrollView>
        {plants.map((item, index) => (


          <View style={styles.itemContainer}>
            <Text style={styles.itemsubtitletext}>{item["plantName_Family"]} </Text>
            <Text key={index}  style={styles.itemtitletext}>{item["plantName_Local"]}</Text>
          </View>

          
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
    color: "#783D19",
    fontSize: 25,
    fontWeight: "400",
  },
  itemsubtitletext: {
    paddingHorizontal: 15,
    color: "#783D19",
    fontSize: 15,
    fontWeight: "300",
  },

  itemContainer:{
    flex: 1,
    backgroundColor: "#C4661F",
    marginVertical: 5
  }
});

export default Encyclopedia;
