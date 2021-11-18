import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    FlatList,
    Image,
    Text,
    Dimensions,
    View,
    TouchableOpacity,
} from "react-native";
import { useFonts, Raleway_100Thin_Italic } from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("screen");
const onBoard = [
    {
        id: 1,
        image: require("../assets/onboard/first.png"),
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        text: "Better way to learning is calling you!",
    },
    {
        id: 2,
        image: require("../assets/onboard/second.png"),

        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        text: "Find yourself by doing whatever you do!",
    },
    {
        id: 3,
        image: require("../assets/onboard/third.png"),

        text: "It's not just learning, it's a promise!",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
];

export default function Welcome({ navigation }) {
    let [fontLoaded] = useFonts({
        Raleway_100Thin_Italic,
    });
    if (!fontLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <FlatList
                    data={onBoard}
                    horizontal
                    pagingEnabled
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                width,
                                padding: 20,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image source={item.image} />
                            <Text style={styles.text}>{item.text}</Text>

                            <Text
                                style={{
                                    marginTop: 8,
                                    fontFamily: "Poppins_400Regular",
                                    textAlign: "center",
                                }}
                            >
                                {item.subText}
                            </Text>
                        </View>
                    )}
                />
                <View style={styles.buttonContainer}>
                    {/* <View>
                    <WelcomeButton title="Register" navigation={navigation} />
                </View>
                <WelcomeButton title="Log In" gray navigation={navigation} /> */}
                    {/* signUp button */}
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Choose Sign Up Method")
                        }
                        style={{
                            elevation: 8,
                            backgroundColor: "#3895D3",

                            paddingVertical: 15,
                            paddingHorizontal: 12,
                            marginBottom: 10,
                            padding: 10,
                            borderRadius: 10,
                            borderStyle: "solid",
                        }}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 20,
                                textAlign: "center",
                                // fontWeight: "bold",
                               fontFamily: "Poppins_700Bold",
                            }}
                        >
                            Register
                        </Text>
                    </TouchableOpacity>
                    {/* Login Button */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LogIn")}
                        style={{
                            elevation: 8,
                            backgroundColor: "white",

                            paddingVertical: 15,
                            paddingHorizontal: 12,
                            marginBottom: 10,
                            padding: 10,
                            borderRadius: 10,
                            borderStyle: "solid",
                        }}
                    >
                        <Text
                            style={{
                                color: "#3895D3",
                                fontSize: 20,
                                textAlign: "center",
                                // fontWeight: "bold",
                                fontFamily: "Poppins_700Bold",
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        // fontWeight: "bold",
        textAlign: "center",
        marginTop: 70,
        // fontFamily: "Poppins_400Regular",
        fontFamily: "Poppins_700Bold",
    },
    buttonContainer: {
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        paddingBottom: 30,
        paddingTop: 30,
        backgroundColor: "#FFF",
    },
});
