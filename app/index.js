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
import ImageScanningPage from './pages/ImageScanningPage';
import PlantDetails from './pages/PlantDetails';
import PlantCarousel from './components/PlantCarousel';
import DeniedPermsPage from './pages/DeniedPermsPage';
import CameraLoadingPage from './pages/CameraLoadingPage';

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
                <Stack.Screen name="ImageScanning" component={ImageScanningPage} options={{ headerShown: false }}/>
                <Stack.Screen name="PlantDetails" component={PlantDetails} options={{ headerShown: false }}/>
                <Stack.Screen name="DeniedPermsPage" component={DeniedPermsPage} options={{ headerShown: false }}/>
                <Stack.Screen name="CameraLoadingPage" component={CameraLoadingPage} options={{ headerShown: false }}/>
            </Stack.Navigator>
    )
}

export default Main;
