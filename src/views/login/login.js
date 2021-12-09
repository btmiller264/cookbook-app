import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import { ActionButton, Input } from '../../components';
import styles from './styles';

export const LoginView = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<KeyboardAvoidingView style={styles.container} behavior='padding'>
				<Text style={styles.title}>
					Cookbook Login
				</Text>
				<Input
					placeholder="Email"
					value={email}
					onChangeText={(email) => setEmail(email)}
					inputStyles={{ width: '80%', marginBottom: 25, marginTop: 0 }}
				/>
				<Input
					placeholder="Password"
					value={password}
					onChangeText={(password) => setPassword(password)}
					inputStyles={{ width: '80%', marginBottom: 25, marginTop: 0 }}
				/>
				<View style={styles.buttonView}>
					<ActionButton 
						label="Login"
						onPress={() => navigation.reset({
							index: 0,
							routes: [{ name: 'Library' }]
						})}
					/>
					<ActionButton 
						label="Register"
						onPress={() => navigation.navigate('Register')}
					/>
				</View>
			</KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}