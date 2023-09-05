import { View, Text, SafeAreaView, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";


const Home = () =>{
    const router = useRouter();

    return(
        <SafeAreaView>
            <Stack.Screen
            options={{headerStyle: {backgroundColor: '#FF5733'},
            headerShadowVisible: false,
            headerTitle: " "

            }}/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: 10
                }}>
                    
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;
