import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useUser } from '../contexts/UserContext';

const SettingsScreen = ({ navigation }) => {
    const { handleLogout } = useUser();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default SettingsScreen;
