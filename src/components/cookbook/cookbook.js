import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import styles from './styles';

export const Cookbook = ({ name, onPress, onPressOptions }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.iconContainer} onPress={onPressOptions}>
                <Image style={styles.icon} source={require('../../../assets/images/Dots.png')} />
            </Pressable>
            <Pressable style={styles.nameContainer} onPress={onPress}>
                <Text style={styles.name}>{name}</Text>
            </Pressable>
        </View>

    )
}

Cookbook.defaultProps = {
    name: '',
    onPress: null,
}

export default Cookbook;