import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Modal,
    Text,
    View,
    FlatList,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const data = [
    {
        id: 1,
        text: "Account Name",
        subtext: "email@email.com",
    },
    {
        id: 2,
        text: "Use Another Account",
        subtext: "",
    },
];

const Google = ({ show, showModal }) => {
    return (
        <View>
            <Modal visible={show} animationType="slide">
                <View style={styles.container}>
                    <MaterialIcons
                        name="cancel"
                        size={32}
                        color="white"
                        onPress={showModal}
                        style={styles.icon}
                    />
                    <View style={[styles.modalContainer]}>
                        <Text style={styles.header}>Choose an Account</Text>
                        <Text
                            style={{ fontWeight: "100", textAlign: "center" }}
                        >
                            To continue to TIKTAK
                        </Text>
                        <View style={{ marginTop: 40 }}>
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={{ flexDirection: "row" }}
                                        >
                                            <Ionicons
                                                name="md-person-outline"
                                                size={40}
                                                color="#3895D3"
                                            />
                                            <View style={{ marginLeft: 15 }}>
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        fontWeight: "800",
                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                                <Text>{item.subtext}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View
                                            style={{
                                                borderBottomWidth:
                                                    item.id === 1 ? 1 : 0,
                                                borderStyle: "solid",
                                                marginTop: 10,
                                                opacity: 0.3,
                                                marginBottom: 10,
                                            }}
                                        />
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Google;

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 15,
        paddingVertical: 30,
        flex: 1,
        backgroundColor: "rgba(0,0,0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    icon: {
        alignSelf: "center",
        marginBottom: 30,
    },
    modalContainer: {
        height: "90%",
        width: "93%",
        backgroundColor: "#fff",
        paddingHorizontal: 40,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
});
