import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import TicketScreen from './screens/TicketScreen';
import { UserProvider, useUser } from './contexts/UserContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                } else if (route.name === 'Details') {
                    iconName = focused ? 'list' : 'list-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                } else if (route.name === 'Tickets') {
                    iconName = focused ? 'ticket' : 'ticket-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
        })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Tickets" component={TicketScreen} />
    </Tab.Navigator>
);

const App = () => {
    const { isAuthenticated, handleLogin, handleLogout } = useUser();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated ? (
                    <Stack.Screen name="MainTabs" options={{ headerShown: false }} component={MainTabs} />
                ) : (
                    <Stack.Screen name="Login" options={{ headerShown: false }}>
                        {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
                    </Stack.Screen>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => (
    <UserProvider>
        <App />
    </UserProvider>
);
