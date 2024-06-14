import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useUser} from "../contexts/UserContext";

const DetailsScreen = () => {
    const {user} = useUser();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Details</Text>
            <Text>Username: {user?.username}</Text>
            <Text>Email: {user?.email}</Text>
            {/* Altri dettagli utente */}
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
    },
});

export default DetailsScreen;
