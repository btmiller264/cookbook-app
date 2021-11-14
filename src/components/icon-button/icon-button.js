import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

export const IconButton = ({ name, onPress, iconSource, imageStyles }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.pressContainer} onPress={onPress}>
                <Image style={{...styles.image, ...imageStyles}} source={iconSource} />
                <Text style={styles.name}>{name}</Text>
            </Pressable>
        </View>
    )
}

IconButton.defaultProps = {
    name: '',
    onPress: null,
}