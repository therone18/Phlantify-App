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

import PlantCarousel from './components/PlantCarousel';

/*
    TODO:
        - Dynamically get plants from the database
*/


const Stack = createNativeStackNavigator()


const Main = () =>{
    
    return(
        
        //<NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Homepage" component={Homepage}  options={{ headerShown: false }}/>
                <Stack.Screen name="History" component={History} options={{ headerShown: false }}/>
                <Stack.Screen name="CameraPage" component={CameraPage} options={{ headerShown: false }}/>
                <Stack.Screen name="Encyclopedia" component={Encyclopedia} options={{ headerShown: false }}/>
                <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }}/>
                <Stack.Screen name="PlantCarousel" component={PlantCarousel} options={{ headerShown: false }}/>
            </Stack.Navigator>
        //</NavigationContainer>
        
       //<SafeAreaView>
        //<Text>TESTdadawcac</Text>
       //</SafeAreaView>
    )
}

export default Main;
