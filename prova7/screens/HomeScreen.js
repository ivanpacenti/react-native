import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useUser} from "../contexts/UserContext";

const HomeScreen = () => {
    const {user} = useUser();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ciao, {user?.nome}!</Text>
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
