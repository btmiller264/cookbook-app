import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Footer } from '../../components';
import styles from './styles';

export const RecipeView = ({ route, navigation }) => {
    const { recipe } = route.params;

    let instructionCounter = 0;

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.internalContainer} style={styles.container}>
                <Text style={styles.title}>{recipe.name}</Text>
                {recipe.data.map((section) => {
                    return (
                        <View style={styles.sectionView}>
                            <Text style={styles.sectionTitle}>{section.title}</Text>
                            <View style={styles.listContainer}>
                                {section.data.map((entry) => {
                                    if (section.title === 'Ingredients') {
                                        return (
                                            <Text style={styles.ingredient}>{`\u2022 ${entry}`}</Text>
                                        )
                                    } else {
                                        instructionCounter++;
                                        return (
                                            <View style={styles.instructionContainer}>
                                                <Text style={styles.number}>{`${(instructionCounter)}.`}</Text>
                                                <Text style={styles.instruction}>{entry}</Text>
                                            </View> 
                                        )
                                    }  
                                })}
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    )
}