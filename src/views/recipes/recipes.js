import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Footer, SearchBar, Recipe, OptionsModal, AreYouSureModal, AddButton } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';

export const RecipesView = ({ navigation, route }) => {
    const { name, allRecipes, showAdd } = route.params;
    const [search, setSearch] = useState('');
    const [recipes, setRecipes] = useState(allRecipes);
    const [isOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState('');
    const [areYouSure, setAreYouSure] = useState(false);

    useEffect(() => {
        setRecipes(allRecipes.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        }))
    }, [search])

    const isFocused = useIsFocused();

    const openAreYouSure = () => {
        setIsOpen(false);
        setAreYouSure(true);
    }

    const deleteRecipe = () => {
        allRecipes.splice(allRecipes.findIndex(entry => entry.name === currentItem.name), 1);
        setRecipes(allRecipes);
        setAreYouSure(false);
    }

    const cancelDelete = () => {
        setAreYouSure(false);
        setIsOpen(true);
    }

    const addRecipe = (name, ingredients, instructions, photos) => {
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
        setRecipes(allRecipes);
    }

    const editRecipe = (name, ingredients, instructions, photos) => {
		allRecipes[allRecipes.indexOf(currentItem)] = {
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
		};
		setRecipes(allRecipes);
    }

    return (
        <View style={{ flex: 1}}>
            <ScrollView contentContainerStyle={styles.internalContainer} style={styles.container}>
                <SearchBar 
                    value={search}
                    onChangeText={(searchTerm) => setSearch(searchTerm)}
                />
                <Text style={styles.title}>{name}</Text>
                {recipes.map((entry) => {
                    return <Recipe 
                            name={entry.name}
                            key={entry.name}
                            onPressRecipe={() => {
                                setCurrentItem(entry);
                                navigation.navigate('Recipe', {
                                    recipe: entry,
                                })
                            }} 
                            onPressOptions={() => {
                                console.log(entry);
                                setCurrentItem(entry);
                                setIsOpen(true);
                            }} />
                })}
                {showAdd ? 
                    <AddButton label='Recipe' onPress={() => navigation.navigate('Add Recipe', {
                                allRecipes: allRecipes,
                                addRecipe: addRecipe,
                                editMode: false,
                            })}
                        customStyles={{ marginBottom: 15 }}
                    /> : <View style={{ marginBottom: 15 }}/>
                }
                <OptionsModal 
                    isOpen={isOpen} 
                    setModalOpen={setIsOpen} 
                    label='Recipe' 
                    deletePress={() => openAreYouSure()}
                    editPress={() => {
                        setIsOpen(false);
                        navigation.navigate('Add Recipe', {
                        editMode: true,
                        editRecipe: editRecipe,
                        currentRecipe: currentItem,
                    })}}
                />
                <AreYouSureModal 
                    isOpen={areYouSure}
                    setModalOpen={setAreYouSure}
                    label='recipe'
                    onDelete={deleteRecipe}
                    onCancel={cancelDelete}
                />
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    )
}