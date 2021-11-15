import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

export const Footer = ({ navigation }) => {
    console.log(navigation);
    return (
        <View>
            <View style={styles.container}>
                <Pressable
                    style={styles.iconContainer}
                    onPress={() => navigation.navigate('Library')}
                >
                    <Image style={styles.icon} source={require('../../../assets/images/Cookbooks.png')} />
                    <Text style={styles.label}>COOKBOOKS</Text>
                </Pressable>
                <Pressable
                    style={styles.iconContainer}
                    onPress={() => navigation.navigate('All Recipes')}
                >
                    <Image style={styles.icon} source={require('../../../assets/images/Recipes.png')} />
                    <Text style={styles.label}>RECIPES</Text>
                </Pressable>
                <Pressable
                    style={styles.iconContainer}
                >
                    <View style={styles.settingsContainer}>
                        <Image style={{ height: 35, width: 35 }} source={require('../../../assets/images/Settings.png')} />
                    </View>
                    <Text style={styles.label}>SETTINGS</Text>
                </Pressable>
            </View>
        </View>
    )
}