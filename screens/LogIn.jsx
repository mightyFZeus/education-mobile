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
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { Entypo, AntDesign } from "@expo/vector-icons";



const ReviewsForm = ({ navigation }) => {
 
    const [show, setModal] = useState(false);
     const [error, setError] = useState("");
     const [loading, setLoading] = useState(false);

    const showModal = () => {
        setModal((prevModal) => !prevModal);
    };
    return (
        <KeyboardAvoidingWrapper>
            <View style={styles.container}>
                <Formik
                    initialValues={{
                        userName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={Yup.object({
                        userName: Yup.string()

                            .min(5)
                            .required("This field is required"),
                        email: Yup.string().required("This field is required"),
                        password: Yup.string().required(
                            "this field is required"
                        ),
                        confirmPassword: Yup.string()
                            .required("Please confirm your password")
                            .oneOf(
                                [Yup.ref("password"), null],
                                "Passwords don't match."
                            ),
                    })}
                    onSubmit={async (values, actions) => {
                     
                    }}
                >
                    {(props) => (
                        <View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={styles.text}>Welcome back,</Text>
                                <Text style={styles.text}>
                                    Sign in to continue
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
                                            backgroundColor:
                                                "rgba(229, 228, 226, .5)",

                                            paddingVertical: 10,
                                            paddingHorizontal: 36,
                                            borderRadius: 10,
                                            marginBottom: 10,
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
                                                    fontFamily:
                                                        "Poppins_700Bold",
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
                                            backgroundColor:
                                                "rgba(229, 228, 226, .5)",

                                            paddingVertical: 10,
                                            paddingHorizontal: 36,
                                            borderRadius: 10,
                                            marginBottom: 10,
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
                                                    fontFamily:
                                                        "Poppins_700Bold",
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
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    textAlign: "center",
                                    fontFamily: "Poppins_700Bold",
                                }}
                            >
                                or
                            </Text>

                            <TextInput
                                style={styles.input}
                                placeholder="email"
                                onChangeText={props.handleChange("email")}
                                value={props.values.email}
                                onBlur={props.handleBlur("email")}
                            />
                            <Text style={styles.error}>
                                {props.touched.email && props.errors.email}
                            </Text>
                            <TextInput
                                style={styles.input}
                                placeholder=" password"
                                onChangeText={props.handleChange("password")}
                                value={props.values.password}
                              
                                onBlur={props.handleBlur("password")}
                            />
                            <Text style={styles.error}>
                                {props.touched.password &&
                                    props.errors.password}
                            </Text>
                            <Google show={show} showModal={showModal} />
                            {/* <Modal visible={false} /> */}

                            <View style={{ marginTop: 10 }}>
                                <TouchableOpacity
                                    onPress={props.handleSubmit}
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
                                            fontFamily: "Poppins_700Bold",
                                        }}
                                    >
                                        Log in
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Forgot Password")}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 15,
                            color: "#3895D3",
                            // fontWeight: "bold",
                            fontFamily: "Poppins_700Bold",
                        }}
                    >
                        Forgot password ?
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingWrapper>
    );
};

export default ReviewsForm;

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: "#ddd",
        padding: 8,
        fontSize: 18,
        borderRadius: 6,
        fontFamily: "Poppins_400Regular",
    },
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
        // fontWeight: "bold",
        fontFamily: "Poppins_700Bold",
        textAlign: "center",
    },
});
