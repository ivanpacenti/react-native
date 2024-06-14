import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { login } from '../services/AuthService';

export default function LoginScreen({ navigation, onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [codiceAzienda, setCodiceAzienda] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLoginPress = async () => {
        if (username && password && codiceAzienda) {
            setLoading(true);
            try {
                const userData = await login(username, password, codiceAzienda);
                console.log('Login successful:', userData);
                setLoading(false);
                onLogin();
            } catch (error) {
                setLoading(false);
                Alert.alert('Login failed', 'Username, password or codice azienda is incorrect.');
            }
        } else {
            Alert.alert('Error', 'Please fill in all fields.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Codice Azienda"
                value={codiceAzienda}
                onChangeText={setCodiceAzienda}
            />
            <Button title="Login" onPress={handleLoginPress} disabled={loading} />
            {loading && <Text>Loading...</Text>}
        </View>
    );
}

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
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
});
