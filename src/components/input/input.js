import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

export const Input = ({ placeholder, value, onChange, defaultValue, inputStyles, textStyles }) => {
    return (
        <View style={{...styles.inputView, ...inputStyles}}>
            <TextInput
                style={{...styles.textInput, ...textStyles}}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                multiline={true}
                defaultValue={defaultValue}
            />
        </View>
    )
}