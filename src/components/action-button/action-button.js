import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export const ActionButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}