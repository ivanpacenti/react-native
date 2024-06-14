import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { login } from '../services/AuthService';

const LoginScreen = ({ navigation, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [codiceAzienda, setCodiceAzienda] = useState('');
    const [loading, setLoading] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [codiceAziendaError, setCodiceAziendaError] = useState(false);

    const handleLoginPress = async () => {
        if (username && password && codiceAzienda) {
            setLoading(true);
            setUsernameError(false);
            setPasswordError(false);
            setCodiceAziendaError(false);

            try {
                const { user, error } = await login(username, password, codiceAzienda);

                if (user) {
                    console.log('Login successful:', user);
                    setLoading(false);
                    onLogin(user);
                } else {
                    setLoading(false);
                    if (error === 'credenziali') {
                        setUsernameError(true);
                        setPasswordError(true);
                        Alert.alert('Login failed', 'Username or password is incorrect.');
                    } else if (error === 'chiave') {
                        setCodiceAziendaError(true);
                        Alert.alert('Login failed', 'Codice azienda is incorrect.');
                    } else {
                        Alert.alert('Login failed', 'Unknown error occurred.');
                    }
                }
            } catch (error) {
                console.error('Login failed:', error.message);
                setLoading(false);
                Alert.alert('Login failed', error.message || 'Impossibile effettuare il login. Riprova.');
            }
        } else {
            Alert.alert('Error', 'Please fill in all fields.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={[styles.input, usernameError && styles.errorInput]}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={[styles.input, passwordError && styles.errorInput]}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={[styles.input, codiceAziendaError && styles.errorInput]}
                placeholder="Codice Azienda"
                value={codiceAzienda}
                onChangeText={setCodiceAzienda}
            />
            <Button title="Login" onPress={handleLoginPress} disabled={loading} />
            {loading && <Text>Loading...</Text>}
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
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    errorInput: {
        borderColor: 'red',
    },
});

export default LoginScreen;
