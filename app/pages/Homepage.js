import { View, Text, SafeAreaView, Button} from "react-native"

//Homepage should show history of previously identified plants
//Homepage should show panels of plants and their descriptions
//Homepage should have a button to direct to Camera feature activity
//Homepage should have a button to direct to plant encyclopedia activity  

const Homepage = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>
                Homepage
            </Text>
            <Button title="PRESS TO GO TO HISTORY" onPress={() => navigation.navigate('AboutUs')}/>
        </SafeAreaView>
    )
}

export default Homepage
