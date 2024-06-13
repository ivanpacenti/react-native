import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Funzione per fare la chiamata API
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.text}>Lista di Post</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                data.map((item) => (
                    <View key={item.id} style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
                    </View>
                ))
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    item: {
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '90%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        marginVertical: 10,
    },
});
