import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import MenuScreen from "./components/MenuScreen";
import CartScreen from "./components/CartScreen";
import ProfileScreen from "./components/ProfileScreen";
import Form1Screen from "./components/forms/Form1Screen";
import Form2Screen from "./components/forms/Form2Screnn";
import Form3Screen from "./components/forms/Form3Screen";
import { Ionicons } from "@expo/vector-icons/Ionicons";
import { ThemeProvider } from "./contexts/ThemeContext ";
import { CartProvider } from "./contexts/CartContext";
import { FormProvider } from "./contexts/FormContext";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
    return (
        <CartProvider>
            <ThemeProvider>
                <FormProvider>
                    <NavigationContainer independent={true}>
                        <Stack.Navigator
                            initialRouteName="Home"
                            screenOptions={{ headerShown: false }}
                        >
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen
                                name="Tabs"
                                component={Tabs}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Form1"
                                component={Form1Screen}
                            />
                            <Stack.Screen
                                name="Form2"
                                component={Form2Screen}
                            />
                            <Stack.Screen
                                name="Form3"
                                component={Form3Screen}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </FormProvider>
            </ThemeProvider>
        </CartProvider>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused, color }) => {
                    let label;

                    if (route.name === "Menu") {
                        label = "Menu";
                    } else if (route.name === "Cart") {
                        label = "Cart";
                    } else if (route.name === "Profile") {
                        label = "Profile";
                    }

                    return <Text style={{ color, fontSize: 12 }}>{label}</Text>;
                },
                tabBarActiveTintColor: "#FF7F00",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default App;
