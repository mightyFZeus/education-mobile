import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
// import * as firebase from "firebase/app";
const firebase = require("firebase/app"); 

export default function Home({ navigation }) {
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // navigation.replace("Dashboard");
                console.log("yes")
            } else {
                // navigation.replace("Home");
                console.log("no");

            }
        });
    });

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
}
