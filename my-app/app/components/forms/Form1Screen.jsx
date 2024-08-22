import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Form1Screen = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

const handleNext = () => {
// Navigate to Form2 Screen
};

return (
<View style={{ flex: 1, padding: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>User Details</Text>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Name:</Text>
    <TextInput
        style={{ fontSize: 18 }}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
    />
    </View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Email:</Text>
    <TextInput
        style={{ fontSize: 18 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
    />
    </View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Phone:</Text>
    <TextInput
        style={{ fontSize: 18 }}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Enter your phone number"
    />
    </View>
    <TouchableOpacity onPress={handleNext}>
    <Text style={{ fontSize: 18, color: 'blue' }}>Next</Text>
    </TouchableOpacity>
</View>
);
};

export default Form1Screen;