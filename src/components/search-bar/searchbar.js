import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from './styles';

export const SearchBar = ({value, onChangeText}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../../../assets/images/SearchIcon.png')} />
            <TextInput 
                style={styles.searchInput}
                placeholder="Search"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}