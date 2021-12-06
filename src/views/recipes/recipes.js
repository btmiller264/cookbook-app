import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Footer, SearchBar, Recipe, OptionsModal, AreYouSureModal, AddButton } from '../../components';
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

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          console.log('Refreshed!');
          setRecipes(allRecipes);
        });
        return unsubscribe;
    }, [allRecipes]);

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

    return (
        <View style={{ flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
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
                            onPressOptions={() => setIsOpen(true)} />
                })}
                {showAdd &&
                    <AddButton label='Recipe' onPress={() => navigation.navigate('Add Recipe', {
                                allRecipes: allRecipes,
                            })}
                    />
                }
                <OptionsModal 
                    isOpen={isOpen} 
                    setModalOpen={setIsOpen} 
                    label='Recipe' 
                    deletePress={() => openAreYouSure()}
                    showEdit={false}
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