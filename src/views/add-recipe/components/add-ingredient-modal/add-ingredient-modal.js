import React, { useState } from 'react';
import { View, Modal, Pressable, Image, Text } from 'react-native';
import { ActionButton, Input } from '../../../../components';
import styles from './styles';

export const AddIngredientModal = ({ isOpen, setModalOpen, addIngredient }) => {
    const [ingredient, setIngredient] = useState('');

    return ( 
    <Modal
        visible={isOpen}
        onRequestClose={() => setModalOpen(false)}
        transparent={true}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.modalTitleView}>
                    <Pressable
                        onPress={() => {
                            setIngredient('');
                            setModalOpen(!isOpen)
                        }}
                    >
                        <Image style={styles.exitIcon} source={require('../../../../../assets/images/Close.png')} />
                    </Pressable>
                    <Text style={styles.modalTitle}>
                        Add Ingredient
                    </Text>
                </View>
                <Input 
                    placeholder="Ingredient" 
                    value={ingredient} 
                    onChange={(name) => setIngredient(name)} 
                />
                <View style={styles.buttonView}>
                    <ActionButton label='Done' onPress={() => {
                        addIngredient(ingredient);
                        setIngredient('');
                    }} />
                </View>
            </View>
        </View>
    </Modal>
    )
}