import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

export const ActionButton = ({ label, onPress, customStyles, textStyles }) => {
    return (
        <Pressable style={{...styles.button, ...customStyles}}
            onPress={onPress}
        >
            <Text style={{...styles.buttonText, ...textStyles}}>{label}</Text>
        </Pressable>
    )
}