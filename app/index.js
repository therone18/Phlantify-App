import * as React from 'react';

import { View, Text, SafeAreaView, Button } from "react-native";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from "./pages/Homepage";
import History from "./pages/History";
import CameraPage from "./pages/CameraPage";
import Encyclopedia from "./pages/Encyclopedia";
import AboutUs from "./pages/AboutUs";


const Stack = createNativeStackNavigator()

const Main = () =>{
    
    return(
        
        //<NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Homepage" component={Homepage} options={{title: "Welcome"}}/>
                <Stack.Screen name="History" component={History}/>
                <Stack.Screen name="CameraPage" component={CameraPage}/>
                <Stack.Screen name="Encyclopedia" component={Encyclopedia}/>
                <Stack.Screen name="AboutUs" component={AboutUs}/>
            </Stack.Navigator>
        //</NavigationContainer>
        
       //<SafeAreaView>
        //<Text>TESTdadawcac</Text>
       //</SafeAreaView>
    )
}

export default Main;
