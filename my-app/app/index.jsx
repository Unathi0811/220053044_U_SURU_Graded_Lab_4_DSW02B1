import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen';
import Form1Screen from './components/forms/Form1Screen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen} 
            screenOptions={{
                headerShown: false
            }}/>
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Menu') {
                    iconName = focused ? 'restaurant-sharp' : 'restaurant-outline';
                } else if (route.name === 'Cart') {
                iconName = focused ? 'cart-sharp' : 'cart-outline';
                } else if (route.name === 'Profile') {
                iconName = focused ? 'person-sharp' : 'person-outline';
                } else if (route.name === 'Form1') {
                iconName = focused ? 'document-sharp' : 'document-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#FF7F00',
            tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name="Menu" component={MenuScreen} options={{
                tabBarLabel: 'Menu',
            }}/>
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Form1" component={Form1Screen} />
        </Tab.Navigator>
    );
};

export default App;