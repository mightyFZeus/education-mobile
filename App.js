import { StatusBar } from "expo-status-bar";
import {useState, useEffect} from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Welcome from "./screens/Welcome";
import AppLoading from "expo-app-loading";
import Signup from "./screens/Signup";
import LogIn from "./screens/LogIn";
import PreSigUp from "./screens/PreSigUp";
import ForgotPassword from "./screens/ForgotPassword";

import Home from "./screens/Home";
  




const Stack = createNativeStackNavigator()

export default function App() {

   
    

        let [fontsLoaded] = useFonts({
            Poppins_400Regular,
            Poppins_700Bold,
        });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
      
                <NavigationContainer>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerStyle: {
                                backgroundColor: "#3895D3",
                            },
                        }}
                    />
                    <Stack.Navigator>
                        <Stack.Screen
                            name="welcome"
                            component={Welcome}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="SignUp"
                            component={Signup}
                            options={{
                                headerStyle: {
                                    backgroundColor: "#3895D3",
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Choose Sign Up Method"
                            component={PreSigUp}
                            options={{
                                headerStyle: {
                                    backgroundColor: "#3895D3",
                                },
                            }}
                        />
                        <Stack.Screen
                            name="LogIn"
                            component={LogIn}
                            options={{
                                headerStyle: {
                                    backgroundColor: "#3895D3",
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Forgot Password"
                            component={ForgotPassword}
                            options={{
                                headerStyle: {
                                    backgroundColor: "#3895D3",
                                },
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        // paddingBottom: 20,
    },
});
