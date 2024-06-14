import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ user }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, {user?.nome}!</Text>
            {/* Altri componenti della schermata Home */}
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

export default HomeScreen;
