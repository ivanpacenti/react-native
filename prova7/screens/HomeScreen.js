import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.column}>
                <TouchableOpacity style={[styles.card, styles.newTickets]}>
                    <Text style={styles.cardTitle}>1</Text>
                    <Text style={styles.cardSubtitle}>Ticket nuovi</Text>
                    <Text style={styles.cardLink}>VAI AL PANNELLO NUOVI TICKET</Text>
                </TouchableOpacity>
                {/*<TouchableOpacity style={[styles.card, styles.reopenedTickets]}>*/}
                {/*    <Text style={styles.cardTitle}>0</Text>*/}
                {/*    <Text style={styles.cardSubtitle}>Ticket Riaperti</Text>*/}
                {/*    <Text style={styles.cardLink}>VAI AL PANNELLO TICKET RIAPERTI</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity style={[styles.card, styles.assignedTickets]}>
                    <Text style={styles.cardTitle}>0</Text>
                    <Text style={styles.cardSubtitle}>Ticket Assegnati</Text>
                    <Text style={styles.cardLink}>VAI AL PANNELLO TICKET ASSEGNATI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.card, styles.closedTickets]}>
                    <Text style={styles.cardTitle}>47</Text>
                    <Text style={styles.cardSubtitle}>Ticket Chiusi</Text>
                    <Text style={styles.cardLink}>VAI AL PANNELLO TICKET CHIUSI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.card, styles.totalTickets]}>
                    <Text style={styles.cardTitle}>48</Text>
                    <Text style={styles.cardSubtitle}>Ticket totali</Text>
                    <Text style={styles.cardLink}>VAI AL PANNELLO NUOVI TICKET</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.card, styles.onlineOperators]}>
                    <Text style={styles.cardTitle}>35</Text>
                    <Text style={styles.cardSubtitle}>Operatori collegati</Text>
                    <Text style={styles.cardLink}>APRI CHAT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,

    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
    },
    column: {
        width: '100%',
    },
    card: {
        backgroundColor: '#2a2a2a',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 36,
        color: '#fff',
    },
    cardSubtitle: {
        fontSize: 18,
        color: '#fff',
    },
    cardLink: {
        marginTop: 10,
        fontSize: 14,
        color: '#fff',
        textDecorationLine: 'underline',
    },
    newTickets: {
        backgroundColor: '#4caf50',
    },
    reopenedTickets: {
        backgroundColor: '#ff9800',
    },
    assignedTickets: {
        backgroundColor: '#f44336',
    },
    closedTickets: {
        backgroundColor: '#9e9e9e',
    },
    totalTickets: {
        backgroundColor: '#3f51b5',
    },
    onlineOperators: {
        backgroundColor: '#e91e63',
    },
});

export default HomeScreen;
