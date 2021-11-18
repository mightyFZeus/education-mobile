import React, {useState} from "react";
import {
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Text,
    View,
    Button,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";




const ReviewsForm = ({navigation}) => {

     const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
 
    
  
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
                        password: Yup.string()
                            .required("this field is required")
                            .matches(
                                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                            ),
                        confirmPassword: Yup.string()
                            .required("Please confirm your password")
                            .oneOf(
                                [Yup.ref("password"), null],
                                "Passwords don't match."
                            ),
                    })}
                    onSubmit={(values, actions) => {
                        if (values.password !== values.confirmPassword) {
                            return setError("password does not match");
                        }

                     
                    }}
                >
                    {(props) => (
                        <View>
                            <Text style={styles.text}>Enter your Details</Text>
                            <TextInput
                                style={styles.input}
                                placeholder=" Username"
                                onChangeText={props.handleChange("userName")}
                                value={props.values.userName}
                                onBlur={props.handleBlur("userName")}
                            />
                            <Text style={styles.error}>
                                {props.touched.userName &&
                                    props.errors.userName}
                            </Text>
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
                            <TextInput
                                style={styles.input}
                                placeholder=" Password"
                                onChangeText={props.handleChange("password")}
                                value={props.values.password}
                                onBlur={props.handleBlur("password")}
                            />
                            <Text style={styles.error}>
                                {props.touched.password &&
                                    props.errors.password}
                            </Text>
                            <TextInput
                                style={styles.input}
                                placeholder=" Confirm  Password"
                                onChangeText={props.handleChange(
                                    "confirmPassword"
                                )}
                                value={props.values.confirmPassword}
                                onBlur={props.handleBlur("confirmPassword")}
                            />
                            <Text style={styles.error}>
                                {props.touched.confirmPassword &&
                                    props.errors.confirmPassword}
                            </Text>
                            <View style={{ marginTop: 30 }}>
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
                                        }}
                                    >
                                        Register
                                    </Text>
                                </TouchableOpacity>
                               
                            </View>
                        </View>
                    )}
                </Formik>
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
        fontSize: 20,
       
        marginBottom: 20,
        marginTop: 30,
        fontFamily: "Poppins_700Bold",
    },
});
