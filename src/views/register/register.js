import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { ActionButton, Input } from '../../components';
import styles from './styles';

export const RegisterView = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<KeyboardAvoidingView style={styles.container} behavior='padding'>
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
					label='Register' 
					onPress={() => navigation.reset({
							index: 0,
							routes: [{ name: 'Library' }]
						})}
				/>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>

    )
}