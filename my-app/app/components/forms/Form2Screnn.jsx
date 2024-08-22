import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FormContext } from '../../contexts/FormContext';
import { useNavigation } from '@react-navigation/native';

const Form2Screen = () => {
    const navigation = useNavigation();
    const { formData, updateFormData } = useContext(FormContext);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const handleNext = () => {
        const newFormData = { ...formData, address, city, state, zip };
        updateFormData(newFormData);
        navigation.navigate('Form3');
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Address Details</Text>
                <TextInput
                value={address}
                onChangeText={(text) => setAddress(text)}
                placeholder="Enter your address"
                style={styles.input}
                />
                <TextInput
                value={city}
                onChangeText={(text) => setCity(text)}
                placeholder="Enter your city"
                style={styles.input}
                />
                <TextInput
                value={state}
                onChangeText={(text) => setState(text)}
                placeholder="Enter your province"
                style={styles.input}
                />
                <TextInput
                value={zip}
                onChangeText={(text) => setZip(text)}
                placeholder="Enter your zip code"
                style={styles.input}
                />
                <TouchableOpacity onPress={handleNext} style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#FF7F00',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Form2Screen;