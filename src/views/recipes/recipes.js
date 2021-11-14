import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Footer, SearchBar, Recipe, RecipeOptionsModal } from '../../components';
import styles from './styles';
import mockData from '../mock-data';

export const RecipesView = ({ navigation }) => {
    const allRecipes = [].concat.apply([], mockData.map((book) => {
        return book.recipes;
    }));
    const [search, setSearch] = useState('');
    const [recipes, setRecipes] = useState(allRecipes);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setRecipes(allRecipes.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        }))
    }, [search])

    return (
        <View style={{ flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
                <SearchBar 
                    value={search}
                    onChangeText={(searchTerm) => setSearch(searchTerm)}
                />
                <Text style={styles.title}>All Recipes</Text>
                {recipes.map((entry) => {
                    return <Recipe name={entry.name} onPressRecipe={() => console.log(entry.name)} onPressOptions={() => setIsOpen(true)} />
                })}
                <RecipeOptionsModal isOpen={isOpen} setModalOpen={setIsOpen} />
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    )
}