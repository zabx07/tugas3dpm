import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import Greetings from '../components/Greetings';
import useLifecycleLogger from '../hooks/useLifecycleLogger';

const HomeScreen = () => {
    useLifecycleLogger('HomeScreen');

    const [clickCount, setClickCount] = useState(0);

    const handlePress = () => {
        setClickCount(clickCount + 1);
        Alert.alert('Interactive Button', `You clicked the button ${clickCount + 1} times!`, [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    };

    return (
        <View style={styles.container}>
            <Greetings />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>KLIK GW</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>tombol tertekan: {clickCount} kali</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    counterText: {
        marginTop: 10,
        fontSize: 16,
        color: 'gray',
    },
});

export default HomeScreen;