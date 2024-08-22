import React from 'react';
import { View, Text } from 'react-native';

const Form3Screen = ({ route }) => {
const { name, email, phone, address, city, state, zip } = route.params;

return (
<View style={{ flex: 1, padding: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Form Submission</Text>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>You have successfully submitted the form!</Text>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>Here are the details you entered:</Text>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>Name: {name}</Text>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>Email: {email}</Text>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>Phone: {phone}</Text>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>Address: {address}</Text>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>City: {city}</Text>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>State: {state}</Text>
    <Text style={{ fontSize: 18, marginBottom: 10 }}>Zip: {zip}</Text>
</View>
);
};

export default Form3Screen;