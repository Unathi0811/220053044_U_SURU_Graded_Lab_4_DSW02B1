import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const menuData = [
    { id: '1', name: 'Burger', description: 'Juicy beef burger', image: require('../../assets/burger.jpeg'), price: 10.99 },
    { id: '2', name: 'Pizza', description: 'Freshly baked pizza', image: require('../../assets/pizza.jpeg'), price: 12.99 },
    { id: '3', name: 'Salad', description: 'Fresh mixed greens salad', image: require('../../assets/salad.jpeg'), price: 8.99 },
    { id: '4', name: 'Sushi', description: 'Freshly rolled sushi', image: require('../../assets/sushi.jpeg'), price: 15.99 },
    { id: '5', name: 'Tacos', description: 'Crispy tacos with seasoned beef', image: require('../../assets/taco.jpeg'), price: 11.99 },
    { id: '6', name: 'Fries', description: 'Crunchy french fries', image: require('../../assets/fries.jpeg'), price: 5.99 },
    { id: '7', name: 'Steak', description: 'Grilled ribeye steak', image: require('../../assets/steak.jpeg'), price: 24.99 },
];

const MenuScreen = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (item) => {
    setCart([...cart, item]);
    };

    return (
    <View style={styles.container}>
        <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity onPress={() => handleAddToCart(item)}>
                <Text style={styles.addToCart}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            </View>
        )}
        />
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
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, 
        flexDirection: 'row',
    },
    image: {
        width: 120,
        height: 120,
        marginRight: 20,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    addToCart: {
        fontSize: 18,
        color: '#007BFF',
    },
};

export default MenuScreen;