import React, { useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { Footer, AddButton, ActionButton, Input } from '../../components';
import { AddData, AddPhoto } from './components';
import styles from './styles';

export const AddRecipe = ({ route, navigation }) => {
    const { allRecipes } = route.params;
    const [name, setName] = useState('');
    const [photos, setPhotos] = useState([]);
    const [ingredients, setIngredients] = useState([ 'test ingredient', 'test 2' ]);
    const [instructions, setInstructions] = useState([ 'Instruction test number 1', 'Test instruction number 2']);

    const addRecipe = () => {
        if (name === '') {
            Alert.alert('Recipe must have a name.')
        } else if (ingredients.length === 0) {
            Alert.alert('Recipe must have at least 1 ingredient.');
        } else if (instructions.length === 0) {
            Alert.alert('Recipe must have at least one instruction.');
        } else {
            allRecipes.push({
                name: name,
                data: [
                    {
                        title: 'Ingredients',
                        data: ingredients
                    },
                    {
                        title: 'Instructions',
                        data: instructions
                    }
                ],
                images: photos,
            });
            navigation.goBack();
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.internalContainer} style={styles.container}>
                <Text style={styles.title}>Add Recipe</Text>
                <View style={styles.sectionView}>
                    <Text style={name.length === 0 ? styles.sectionTitleEmpty : styles.sectionTitle}>Recipe Name</Text>
                    <Input 
                        placeholder="Name" 
                        value={name} 
                        onChange={(name) => setName(name)}
                        inputStyles={{ borderWidth: 1, marginBottom: 0 }} 
                    />
                </View>
                <AddPhoto photos={photos} setPhotos={setPhotos} />
                <AddData 
                    data={ingredients} 
                    setData={setIngredients}
                    title='Ingredients'
                    addTitle='Add Ingredient'
                    editTitle='Edit Ingredient'
                    placeholder='Ingredient'
                />
                <AddData 
                    data={instructions}
                    setData={setInstructions}
                    title='Instructions'
                    addTitle='Add Instruction'
                    editTitle='Edit Instruction'
                    placeholder='Instruction'
                />
                <View style={styles.sectionView}></View>
                <View style={styles.buttonView}>
                    <ActionButton 
                        label='Cancel' 
                        customStyles={{ backgroundColor: '#F7F7F7', borderColor: 'black', borderWidth: 1 }}
                        textStyles={{ color: '#7DA2A9' }}
                        onPress={() => navigation.goBack()}
                    />
                    <ActionButton 
                        label='Done' 
                        onPress={() => addRecipe()}
                    />
                </View>
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    )
}