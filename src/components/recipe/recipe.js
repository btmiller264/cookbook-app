import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

export const Recipe = ({ name, onPressRecipe, onPressOptions }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.nameContainer} onPress={onPressRecipe}>
                <Text style={styles.name}>{name}</Text>
            </Pressable>
            <Pressable style={styles.imageContainer} onPress={onPressOptions}>
                <Image style={styles.image} source={require('../../../assets/images/Dots.png')} />
            </Pressable>
        </View>

    )
}

Recipe.defaultProps = {
    name: '',
    onPress: null,
}

