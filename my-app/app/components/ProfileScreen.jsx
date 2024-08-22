import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FormContext } from "../contexts/FormContext";
import { ThemeContext } from "../contexts/ThemeContext ";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "./MenuScreen";
import CartScreen from "./CartScreen";
import Ionicons from "@expo/vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                  
                    if (route.name === "Profile") {
                      iconName = focused ? "person-sharp" : "person-outline";
                    } else if (route.name === "Menu") {
                      iconName = focused ? "restaurant-sharp" : "restaurant-outline";
                    } else if (route.name === "Cart") {
                      iconName = focused ? "cart-sharp" : "cart-outline";
                    }
                  
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                tabBarActiveTintColor: "#FF7F00",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen
                name="Profile"
                component={ProfileDetails}
                options={{ tabBarLabel: "Profile" }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{ tabBarLabel: "Menu" }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{ tabBarLabel: "Cart" }}
            />
        </Tab.Navigator>
    );
};

const ProfileDetails = () => {
    const { formData } = useContext(FormContext);
    const { theme } = useContext(ThemeContext);

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: theme.backgroundColor },
            ]}
        >
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: theme.textColor,
                }}
            >
                Profile Screen
            </Text>
            <View style={styles.card}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: theme.textColor,
                    }}
                >
                    Personal Details
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    Name: {formData.name}
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    Email: {formData.email}
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    Phone: {formData.phone}
                </Text>
            </View>
            <View style={styles.card}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: theme.textColor,
                    }}
                >
                    Address
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    Street: {formData.address}
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    City: {formData.city}
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    State: {formData.state}
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    Zip: {formData.zip}
                </Text>
            </View>
            <View style={styles.card}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: theme.textColor,
                    }}
                >
                    Payment Details
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    Payment Method: Card
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    Card Number: {formData.cardNumber}
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    Expiration Month: {formData.expirationMonth}
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    Expiration Year: {formData.expirationYear}
                </Text>
                <Text style={{ fontSize: 18, color: theme.textColor }}>
                    CVV: {formData.cvv}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        backgroundColor: "white",
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
});

export default ProfileScreen;
