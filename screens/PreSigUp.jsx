import React, { useState } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Text,
    View,
    Modal,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Google from "./Google";
import { Entypo, AntDesign } from '@expo/vector-icons'; 


const PreSignUp = ({ navigation }) => {
    const [show, setModal] = useState(false);

    const showModal = () => {
        setModal((prevModal) => !prevModal);
    };
    return (
        <View style={styles.container}>
            <View>
                <View style={{ marginTop: 20 }}>
                    <Text
                        style={{
                            fontFamily: "Poppins_700Bold",
                            fontSize: 30,
                            // fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Welcome ,
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Poppins_700Bold",
                            fontSize: 30,
                            // fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Sign Up to continue
                    </Text>
                </View>
                <View>
                    <View
                        style={{
                            // backgroundColor: "#000",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingVertical: 2,
                            marginTop: 20,
                            marginBottom: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={showModal}
                            style={{
                                width: "90%",
                                backgroundColor: "rgba(229, 228, 226, .5)",

                                paddingVertical: 10,
                                paddingHorizontal: 36,
                                borderRadius: 10,
                                marginBottom: 15,
                            }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <Entypo
                                    name="facebook-with-circle"
                                    size={40}
                                    color="#3895D3"
                                    style={{ marginRight: 10 }}
                                />
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontFamily: "Poppins_700Bold",
                                        marginTop: 10,

                                        color: "black",
                                        textAlign: "center",
                                    }}
                                >
                                    Sign up with Facebook
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={showModal}
                            style={{
                                width: "90%",
                                backgroundColor: "rgba(229, 228, 226, .5)",

                                paddingVertical: 10,
                                paddingHorizontal: 36,
                                borderRadius: 10,
                                marginBottom: 15,
                            }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <AntDesign
                                    name="google"
                                    size={40}
                                    color="#3895D3"
                                    style={{ marginRight: 10 }}
                                />
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontFamily: "Poppins_700Bold",
                                        marginTop: 10,

                                        color: "black",
                                        textAlign: "center",
                                    }}
                                >
                                    Sign up with Google
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Google show={show} showModal={showModal} />
                </View>

                <Text
                    style={{
                        fontSize: 20,
                        textAlign: "center",
                        fontFamily: "Poppins_400Regular",
                    }}
                >
                    or
                </Text>
                <View>
                    <View
                        style={{
                            // backgroundColor: "#000",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingVertical: 2,
                            marginTop: 20,
                            marginBottom: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignUp")}
                            style={{
                                flexDirection: "column",
                                fontSize: 15,
                                fontFamily: "Poppins_700Bold",
                                width: "90%",
                                backgroundColor: "rgba(229, 228, 226, .5)",

                                paddingVertical: 18,
                                borderRadius: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontFamily: "Poppins_700Bold",
                                    // width: "100%",

                                    color: "black",
                                    textAlign: "center",
                                }}
                            >
                                Sign up with Email
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text
                        style={{
                            textAlign: "center",
                            lineHeight: 25,
                            fontFamily: "Poppins_400Regular",
                        }}
                    >
                        By Signing up, you are agreed to our friendly Terms and
                        condition
                    </Text>
                </View>
                <View>
                    <Text
                        style={{
                            textAlign: "center",
                            marginTop: 20,
                            fontFamily: "Poppins_700Bold",
                            fontSize: 16,
                        }}
                    >
                        Already have an Account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LogIn")}
                    >
                        <Text
                            style={{
                                marginTop: 20,
                                textAlign: "center",
                                color: "#3895D3",
                                fontFamily: "Poppins_700Bold",
                            }}
                        >
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PreSignUp;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: "#FFF",
    },
    error: {
        color: "crimson",
        // fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        // textAlign: "center",
    },

    text: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    font: {
        fontFamily: "Poppins_400Regular",
    },
});
