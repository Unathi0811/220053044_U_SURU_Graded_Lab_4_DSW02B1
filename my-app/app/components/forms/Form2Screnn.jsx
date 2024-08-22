import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Form2Screen = ({ navigation, route }) => {
const { name, email, phone } = route.params;
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [state, setState] = useState('');
const [zip, setZip] = useState('');

const handleNext = () => {
navigation.navigate('Form3', { name, email, phone, address, city, state, zip });
};

return (
<View style={{ flex: 1, padding: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Address Details</Text>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Address:</Text>
    <TextInput
        style={{ fontSize: 18 }}
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="Enter your address"
    />
    </View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>City:</Text>
    <TextInput
        style={{ fontSize: 18 }}
        value={city}
        onChangeText={(text) => setCity(text)}
        placeholder="Enter your city"
    />
    </View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>State:</Text>
    <TextInput
        style={{ fontSize: 18 }}
        value={state}
        onChangeText={(text) => setState(text)}
        placeholder="Enter your state"
    />
    </View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Zip:</Text>
    <TextInput
        style={{ fontSize: 18 }}
        value={zip}
        onChangeText={(text) => setZip(text)}
        placeholder="Enter your zip code"
    />
    </View>
    <TouchableOpacity onPress={handleNext}>
    <Text style={{ fontSize: 18, color: 'blue' }}>Next</Text>
    </TouchableOpacity>
</View>
);
};

export default Form2Screen;