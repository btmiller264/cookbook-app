import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import mockData from '../../views/mock-data';

export const Footer = ({ navigation }) => {
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
                    onPress={() => navigation.navigate('Recipes', {
                        allRecipes: [].concat.apply([], mockData.map((book) => {
                            return book.recipes;
                        })),
                        name: "All Recipes",
                        showAdd: false,
                    })}
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