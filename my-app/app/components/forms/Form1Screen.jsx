import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FormContext } from '../..//contexts/FormContext';
import { useNavigation } from '@react-navigation/native';

const Form1Screen = () => {
    const { formData, updateFormData } = useContext(FormContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigation = useNavigation();

    const handleNext = () => {
        const newFormData = { ...formData, name, email, phone };
        updateFormData(newFormData);
        navigation.navigate('Form2');
      };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>User Details</Text>
                <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Enter your name"
                style={styles.input}
                />
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Enter your email"
                    style={styles.input}
                />
                <TextInput
                value={phone}
                onChangeText={(text) => setPhone(text)}
                placeholder="Enter your phone number"
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

export default Form1Screen;