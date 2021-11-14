import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export const Cookbook = ({ name, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

Cookbook.defaultProps = {
    name: '',
    onPress: null,
}

export default Cookbook;