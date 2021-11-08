import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ActionButton, Input } from '../../components';
import styles from './styles';

export const RegisterView = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Register
            </Text>
            <Input 
                placeholder="First Name" 
                value={firstName} 
                onChange={(firstName) => setFirstName(firstName)}
                inputStyles={{ width: '80%', marginBottom: 25, marginTop: 0 }}
            />
            <Input 
                placeholder="Last Name" 
                value={lastName} 
                onChange={(name) => setLastName(name)}
                inputStyles={{ width: '80%', marginBottom: 25, marginTop: 0 }}
            />
            <Input 
                placeholder="Email" 
                value={email} 
                onChange={(email) => setEmail(email)}
                inputStyles={{ width: '80%', marginBottom: 25, marginTop: 0 }}
            />
            <Input 
                placeholder="Password" 
                value={password} 
                onChange={(password) => setPassword(password)}
                inputStyles={{ width: '80%', marginBottom: 25, marginTop: 0 }}
            />
            <ActionButton 
                label='REGISTER' 
                onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'Library' }]
                    })}
            />
        </View>
    )
}