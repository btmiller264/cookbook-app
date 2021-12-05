import React, { useState } from 'react';
import { View, ScrollView, Text, Pressable, Alert } from 'react-native';
import { Footer, AddButton, ActionButton, Input, TextModal } from '../../components';
import styles from './styles';

export const AddRecipe = ({ route, navigation }) => {
    const { allRecipes } = route.params;
    const [name, setName] = useState('');
    const [photos, setPhotos] = useState([]);
    const [ingredients, setIngredients] = useState([ 'test ingredient', 'test 2' ]);
    const [instructions, setInstructions] = useState([ 'Instruction test number 1', 'Test instruction number 2']);
    const [currentIngredient, setCurrentIngredient] = useState('');

    const [addIngrModalOpen, setAddIngrModalOpen] = useState(false);
    const [addInstrModalOpen, setAddInstrModalOpen] = useState(false);
    const [editIngrModalOpen, setEditIngrModalOpen] = useState(false);

    const addIngredient = (ingredient) => {
        if (ingredient != '') {
            setIngredients([...ingredients, ingredient]);
        }
        setAddIngrModalOpen(false);
    }

    const addInstruction = (instruction) => {
        if (instruction != '') {
            setInstructions([...instructions, instruction]);
        }
        setAddInstrModalOpen(false);
    }

    const editIngredient = (ingredient) => {
        const ingredientsCopy = [...ingredients];
        if (ingredient != '') {
            ingredientsCopy[ingredientsCopy.indexOf(currentIngredient)] = ingredient;
            setIngredients(ingredientsCopy);
        }
        setEditIngrModalOpen(false);
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
                <View style={styles.sectionView}>
                    <Text style={photos.length === 0 ? styles.sectionTitleEmpty : styles.sectionTitle}>Photos</Text>
                    <AddButton customStyles={{ width: '100%', marginTop: 10 }} label='Photo' onPress={() => console.log('Add Photo')} />
                </View>
                <View style={styles.sectionView}>
                    <Text style={ingredients.length === 0 ? styles.sectionTitleEmpty : styles.sectionTitle}>Ingredients</Text>
                    {ingredients.map((entry) => {
                        return (
                            <Pressable style={styles.entryContainer} key={entry} onPress={() => {
                                setCurrentIngredient(entry);
                                setEditIngrModalOpen(true);
                            }}>
                                <Text style={styles.entry}>{entry}</Text>
                            </Pressable>
                        )
                    })}
                    <AddButton customStyles={{ width: '100%', marginTop: 10 }} label='Ingredient' onPress={() => setAddIngrModalOpen(true)} />
                </View>
                <View style={styles.sectionView}>
                    <Text style={instructions.length === 0 ? styles.sectionTitleEmpty : styles.sectionTitle}>Instructions</Text>
                    {instructions.map((entry, index) => {
                        return (
                            <Pressable style={styles.entryContainer}>
                                <Text style={styles.entry}>{`${index + 1}. ${entry}`}</Text>
                            </Pressable>
                        )
                    })}
                    <AddButton customStyles={{ width: '100%', marginTop: 10 }} label='Instruction' onPress={() => setAddInstrModalOpen(true)} />
                </View>
                <View style={styles.sectionView}></View>
                <View style={styles.buttonView}>
                    <ActionButton 
                        label='Cancel' 
                        customStyles={{ backgroundColor: '#F7F7F7', borderColor: 'black', borderWidth: 1 }}
                        textStyles={{ color: '#7DA2A9' }}
                        onPress={() => console.log('Cancel')}
                    />
                    <ActionButton 
                        label='Done' 
                        onPress={() => console.log('Done')}
                    />
                </View>
                <TextModal 
                    isOpen={addIngrModalOpen}
                    label='Add Ingredient'
                    placeholder='Ingredient'
                    setModalOpen={setAddIngrModalOpen}
                    onDone={addIngredient}
                />
                <TextModal 
                    isOpen={addInstrModalOpen}
                    label='Add Instruction'
                    placeholder='Instruction'
                    setModalOpen={setAddInstrModalOpen}
                    onDone={addInstruction}
                    inputStyles={{ height: 80 }}
                    textStyles={{ height: 80 }}
                />
                <TextModal 
                    isOpen={editIngrModalOpen}
                    label='Edit Ingredient'
                    initialValue={currentIngredient}
                    setModalOpen={setEditIngrModalOpen}
                    onDone={editIngredient}
                />
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    )
}