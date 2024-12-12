import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Greetings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Febrii</Text>
            <Text style={styles.subtext}>Silahkan tekan-tekan tombol dibawah</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 20,
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    subtext: {
        fontSize: 16,
        color: 'gray',
    },
});

export default Greetings;