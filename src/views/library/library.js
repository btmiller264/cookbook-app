import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import { SearchBar, Cookbook, Footer, AreYouSureModal } from '../../components';
import { AddCookbookModal, CookbookOptionsModal, EditCookbookModal } from './components';
import styles from './styles';
import mockData from '../mock-data';

export const LibraryView = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [items, setItems] = useState(mockData);
    const [addCookbookOpen, setAddCookbookOpen] = useState(false);
    const [cookbookOptionsOpen, setCookbookOptionsOpen] = useState(false);
    const [editCookbookOpen, setEditCookbookOpen] = useState(false);
    const [areYouSure, setAreYouSure] = useState(false);
    const [currentItem, setCurrentItem] = useState('');

    useEffect(() => {
        setItems(mockData.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        }));
    }, [search]);

    const addCookbook = (cookbook) => {
        mockData.push(cookbook);
        setItems(mockData);
        setAddCookbookOpen(false);
    }

    const editCookbook = (newName) => {
        mockData.find(entry => {
            if (entry.name === currentItem.name) {
                entry.name = newName;
            }
        })
        setItems(mockData);
        setEditCookbookOpen(false);
    }

    const openAreYouSure = () => {
        setCookbookOptionsOpen(false);
        setAreYouSure(true);
    }

    const deleteCookbook = () => {
        mockData.splice(mockData.findIndex(entry => entry.name === currentItem.name), 1);
        setItems(mockData);
        setAreYouSure(false);
    }

    const cancelDelete = () => {
        setAreYouSure(false);
        setCookbookOptionsOpen(true);
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
                            <Cookbook 
                                key={book.name} 
                                name={book.name} 
                                onPressOptions={() => {
                                    setCurrentItem(book);
                                    setCookbookOptionsOpen(true);
                                }}
                            />
                        )
                    })}
                    <Pressable
                        style={styles.addButton}
                        onPress={() => setAddCookbookOpen(true)}
                    >
                        <Image style={styles.addIcon} source={require('../../../assets/images/AddIcon.png')} />
                    </Pressable>
                    <AddCookbookModal 
                        isOpen={addCookbookOpen}
                        setModalOpen={setAddCookbookOpen}
                        addCookbook={addCookbook}
                    />
                    <CookbookOptionsModal
                        isOpen={cookbookOptionsOpen}
                        setModalOpen={setCookbookOptionsOpen}
                        editPress={() => setEditCookbookOpen(true)}
                        deletePress={() => openAreYouSure()}
                    />
                    <EditCookbookModal 
                        isOpen={editCookbookOpen}
                        setModalOpen={setEditCookbookOpen}
                        editCookbook={editCookbook}
                    />
                    <AreYouSureModal 
                        isOpen={areYouSure}
                        setModalOpen={setAreYouSure}
                        label='cookbook'
                        onDelete={deleteCookbook}
                        onCancel={cancelDelete}
                    />
                </View>            
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    )
}