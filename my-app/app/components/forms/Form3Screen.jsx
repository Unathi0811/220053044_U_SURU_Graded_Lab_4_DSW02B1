import React, { useState, useContext } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import { FormContext } from "../../contexts/FormContext";
import { useNavigation } from "@react-navigation/native";  // Import useNavigation

const Form3Screen = () => {
    const navigation = useNavigation();  // Get navigation object
    const { formData, updateFormData } = useContext(FormContext);
    const [cardNumber, setCardNumber] = useState("");
    const [expirationMonth, setExpirationMonth] = useState("");
    const [expirationYear, setExpirationYear] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = () => {
        const newFormData = {
            ...formData,
            cardNumber,
            expirationMonth,
            expirationYear,
            cvv,
        };
        updateFormData(newFormData);
        navigation.navigate('Tabs');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.cardContainer}>
                <Image
                    source={require("../../../assets/card.png")}
                    style={styles.cardImage}
                />
                <View style={styles.cardDetails}>
                    <Text style={styles.title}>Payment Details</Text>
                    <TextInput
                        value={cardNumber}
                        onChangeText={(text) => setCardNumber(text)}
                        placeholder="Enter card number (16 digits)"
                        style={styles.input}
                        keyboardType="number-pad"
                        maxLength={16}
                    />
                    <View style={styles.row}>
                        <TextInput
                            value={expirationMonth}
                            onChangeText={(text) => setExpirationMonth(text)}
                            placeholder="MM"
                            style={styles.inputHalf}
                            keyboardType="number-pad"
                            maxLength={2}
                        />
                        <TextInput
                            value={expirationYear}
                            onChangeText={(text) => setExpirationYear(text)}
                            placeholder="YYYY"
                            style={styles.inputHalf}
                            keyboardType="number-pad"
                            maxLength={4}
                        />
                    </View>
                    <TextInput
                        value={cvv}
                        onChangeText={(text) => setCvv(text)}
                        placeholder="Enter your CVV (3 digits)"
                        style={styles.input}
                        keyboardType="number-pad"
                        maxLength={3}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        marginTop: 0,
    },
    cardContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "80%",
        height: "80%",
        alignContent: "center",
    },
    cardImage: {
        width: 200,
        height: 150,
        resizeMode: "contain",
        marginBottom: 20,
        alignSelf: "center",
    },
    cardDetails: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    inputHalf: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        width: "45%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "#FF7F00",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Form3Screen;
