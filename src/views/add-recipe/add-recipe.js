import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Footer, ActionButton, Input } from '../../components';
import { AddData, AddPhoto } from './components';
import styles from './styles';

export const AddRecipe = ({ route, navigation }) => {
    const { addRecipe, currentRecipe, editMode, editRecipe } = route.params;
    const [name, setName] = useState(currentRecipe ? currentRecipe.name : '');
    const [photos, setPhotos] = useState(currentRecipe ? currentRecipe.images : []);
    const [ingredients, setIngredients] = useState(currentRecipe ? currentRecipe.data[0].data : []);
    const [instructions, setInstructions] = useState(currentRecipe ? currentRecipe.data[1].data : []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.internalContainer} style={styles.container}>
                <Text style={styles.title}>{editMode ? 'Edit Recipe' : 'Add Recipe'}</Text>
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
                        onPress={() => {
                            editMode ? editRecipe(name, ingredients, instructions, photos) :
                            addRecipe(name, ingredients, instructions, photos);
                            navigation.goBack();
                        }}
                    />
                </View>
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    )
}