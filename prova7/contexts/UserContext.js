// contexts/UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const userData = await AsyncStorage.getItem('user');
                if (userData) {
                    setUser(JSON.parse(userData));
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Failed to load user data', error);
            }
        };

        loadUserData();
    }, []);

    const handleLogin = async (user) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(user));
            setIsAuthenticated(true);
            setUser(user);
        } catch (error) {
            console.error('Failed to save user data', error);
        }
    };

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error('Failed to clear user data', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, isAuthenticated, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
