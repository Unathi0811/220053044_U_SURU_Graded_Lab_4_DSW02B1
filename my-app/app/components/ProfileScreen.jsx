import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [theme, setTheme] = useState({
text: 'black',
background: 'white',
});

const handleUpdateTheme = (textColor, backgroundColor) => {
setTheme({ text: textColor, background: backgroundColor });
};

return (
    <View style={{ flex: 1, padding: 20, backgroundColor: theme.background }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.text }}>
        Profile
    </Text>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.text }}>Name:</Text>
        <TextInput
        style={{ fontSize: 18, color: theme.text }}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
        />
    </View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.text }}>Address:</Text>
        <TextInput
        style={{ fontSize: 18, color: theme.text }}
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="Enter your address"
        />
    </View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.text }}>Theme:</Text>
        <TouchableOpacity onPress={() => handleUpdateTheme('white', 'black')}>
        <Text style={{ fontSize: 18, color: 'white' }}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleUpdateTheme('black', 'white')}>
        <Text style={{ fontSize: 18, color: 'black' }}>Dark</Text>
        </TouchableOpacity>
    </View>
    </View>
);
};

export default ProfileScreen;