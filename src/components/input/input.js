import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

export const Input = ({ placeholder, value, onChange, inputStyles }) => {
    return (
        <View style={{...styles.inputView, ...inputStyles}}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />
        </View>
    )
}