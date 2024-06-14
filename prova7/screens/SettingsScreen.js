import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {useUser} from "../contexts/UserContext";

const SettingsScreen = ({  onLogout }) => {
    const {user} = useUser();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text>Username: {user?.username}</Text>
            <Button title="Logout" onPress={onLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default SettingsScreen;
