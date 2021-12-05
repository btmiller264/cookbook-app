import React from 'react';
import { Pressable, Image, Text } from 'react-native';
import styles from './styles';

export const AddButton = ({ label, onPress, customStyles }) => {
    return (
        <Pressable
            style={{...styles.addContainer, ...customStyles}}
            onPress={onPress}
        >
            <Image style={styles.addIcon} source={require('../../../assets/images/AddIcon.png')} />
            <Text style={styles.addLabel}>{`Add ${label}`}</Text>
        </Pressable>
    );
}