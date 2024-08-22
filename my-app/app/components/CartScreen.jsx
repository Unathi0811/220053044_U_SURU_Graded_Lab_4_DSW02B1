import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const CartScreen = () => {
const [cart, setCart] = useState([]);

const handleRemoveFromCart = (item) => {
setCart(cart.filter((cartItem) => cartItem.id !== item.id));
};

const handleProceedToCheckout = () => {
// Implement checkout logic here
};

return (
<View style={styles.container}>
    <FlatList
    data={cart}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
            <Text style={styles.removeFromCart}>Remove</Text>
        </TouchableOpacity>
        </View>
    )}
    />
    <TouchableOpacity onPress={handleProceedToCheckout}>
    <Text style={styles.proceedToCheckout}>Proceed to Checkout</Text>
    </TouchableOpacity>
</View>
);
};

const styles = {
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    item: {
        flexDirection: 'row',
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    removeFromCart: {
        fontSize: 16,
        color: '#FF0000',
    },
    proceedToCheckout: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF',
    },
};

export default CartScreen;