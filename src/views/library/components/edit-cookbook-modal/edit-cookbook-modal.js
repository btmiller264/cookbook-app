import React, { useState } from 'react';
import { View, Modal, Pressable, Image, Text } from 'react-native';
import { ActionButton, Input } from '../../../../components';
import styles from './styles';

export const EditCookbookModal = ({ isOpen, setModalOpen, editCookbook }) => {
    const [newName, setNewName] = useState('');

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
                        onPress={() => setModalOpen(!isOpen)}
                    >
                        <Image style={styles.exitIcon} source={require('../../../../../assets/images/Close.png')} />
                    </Pressable>
                    <Text style={styles.modalTitle}>
                        Edit Cookbook
                    </Text>
                </View>
                <Input 
                    placeholder="Name" 
                    value={newName} 
                    onChange={(name) => setNewName(name)} 
                />
                <View style={styles.buttonView}>
                    <ActionButton label='SAVE' onPress={() => {
                        editCookbook(newName);
                        setNewName('');
                    }} />
                </View>
            </View>
        </View>
    </Modal>
    )
}