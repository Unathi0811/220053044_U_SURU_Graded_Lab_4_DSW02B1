import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { CartContext } from '../contexts/CartContext';

const menuData = [
    { id: '1', name: 'Burger', description: 'Juicy beef burger', image: require('../../assets/burger.jpeg'), price: 10.99 },
    { id: '2', name: 'Pizza', description: 'Freshly baked pizza', image: require('../../assets/pizza.jpeg'), price: 12.99 },
    { id: '3', name: 'Salad', description: 'Fresh mixed greens salad', image: require('../../assets/salad.jpeg'), price: 8.99 },
    { id: '4', name: 'Sushi', description: 'Freshly rolled sushi', image: require('../../assets/sushi.jpeg'), price: 15.99 },
    { id: '5', name: 'Tacos', description: 'Crispy tacos with seasoned beef', image: require('../../assets/taco.jpeg'), price: 11.99 },
    { id: '6', name: 'Fries', description: 'Crunchy french fries', image: require('../../assets/fries.jpeg'), price: 5.99 },
    { id: '7', name: 'Steak', description: 'Grilled ribeye steak', image: require('../../assets/steak.jpeg'), price: 24.99 },
];

const CartScreen = () => {
    const { cart, removeItemFromCart, updateItemQuantity, clearCart, totalCost } = useContext(CartContext);

    const handleRemoveFromCart = (item) => {
        removeItemFromCart(item);
    };

    const handleUpdateQuantity = (item, quantity) => {
        updateItemQuantity(item, quantity);
    };

    const handleProceedToCheckout = () => {
        clearCart();
        alert('Checkout successful! Your cart is now empty.');
    };

    return (
        <View style={styles.container}>
        {cart.length > 0 ? (
            <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View style={styles.item}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                    <View style={styles.quantityControls}>
                    <TouchableOpacity onPress={() => handleUpdateQuantity(item, item.quantity + 1)}>
                        <Text style={styles.updateQuantity}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleUpdateQuantity(item, item.quantity - 1)}>
                        <Text style={styles.updateQuantity}>-</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
                        <Text style={styles.removeFromCart}>Remove</Text>
                    </TouchableOpacity>
                </View>
                </View>
            )}
            />
        ) : (
            <Text style={styles.emptyCart}>Your cart is empty</Text>
        )}
        {cart.length > 0 && (
            <View>
            <Text style={styles.totalCost}>Total Cost: ${totalCost.toFixed(2)}</Text>
            <TouchableOpacity onPress={handleProceedToCheckout}>
                <Text style={styles.proceedToCheckout}>Proceed to Checkout</Text>
            </TouchableOpacity>
            </View>
        )}
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
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
    quantity: {
        fontSize: 16,
        color: '#333',
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    updateQuantity: {
        fontSize: 16,
        color: '#007BFF',
        marginRight: 10,
    },
    removeFromCart: {
        fontSize: 16,
        color: '#FF0000',
    },
    totalCost: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    proceedToCheckout: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    emptyCart: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
};

export default CartScreen;