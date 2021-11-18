import React, {useState} from "react";
import { StyleSheet,TouchableWithoutFeedback, Keyboard, TouchableOpacity, TextInput, Text, View, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup"



const ForgotPassword = ({ navigation }) => {
       const [error, setError] = useState("");
       const [message, setMessage] = useState("");
       const [loading, setLoading] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Enter your Email</Text>
                </View>
                <Formik
                    initialValues={{ email: "" }}
                    validationSchema={Yup.object({
                        email: Yup.string().required("This field is required"),
                    })}
                    onSubmit={async (values, actions) => {
                     Alert.alert(
                         "Sent",
                         "Check your inbox for further instructions",
                         [
                             {
                                 text: "OK",
                                 onPress: () => navigation.push("welcome"),
                             },
                         ]
                     );
                       
                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                onChangeText={props.handleChange("email")}
                                value={props.values.email}
                                onBlur={props.handleBlur("email")}
                            />
                            <Text style={styles.error}>
                                {props.touched.email && props.errors.email}
                            </Text>
                            <TouchableOpacity
                                onPress={props.handleSubmit}
                                style={{
                                    elevation: 8,
                                    backgroundColor: "#3895D3",

                                    paddingVertical: 15,
                                    paddingHorizontal: 12,
                                    marginTop: 150,
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
                                    }}
                                >
                                    Send email
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor:"#fff"
        
    },
    text: {
        fontSize: 20,

        fontFamily: "Poppins_700Bold",
        marginTop: 20,
        marginBottom:70
        
    },
    error: {
        color: "crimson",
        // fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        // textAlign: "center",
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "#ddd",
        padding: 8,
        fontSize: 18,
        borderRadius: 6,
    },
});
