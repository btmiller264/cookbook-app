import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export const LoginView = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Cookbook App
            </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'Library' }]
                    })}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'Library' }]
                    })}
                >
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}