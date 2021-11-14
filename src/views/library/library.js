import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { SearchBar, Cookbook, Footer } from '../../components';
import { AddCookbookModal } from './components';
import styles from './styles';
import mockData from '../mock-data';

export const LibraryView = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [items, setItems] = useState(mockData);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setItems(mockData.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        }));
    }, [search]);

    const addCookbook = (cookbook) => {
        setItems([...items, cookbook]);
        setModalOpen(false);
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <SearchBar 
                    value={search}
                    onChangeText={(searchTerm) => setSearch(searchTerm)}
                />
                <Text style={styles.title}>
                    MY COOKBOOKS
                </Text>
                <View style={styles.cookbooksView}>
                    {items.map((book) => {
                        return (
                            <Cookbook key={book.name} name={book.name}/>
                        )
                    })}
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => setModalOpen(true)}
                    >
                        <Image style={styles.addIcon} source={require('../../../assets/images/AddIcon.png')} />
                    </TouchableOpacity>
                    <AddCookbookModal 
                        isOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        addCookbook={addCookbook}
                    />
                </View>            
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    )
}