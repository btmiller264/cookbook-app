import React, { useState, useEffect } from 'react';
import { View, Modal, Pressable, Image, Text, TextInput } from 'react-native';
import { ActionButton } from '../../../../../../components';
import styles from './styles';

export const EditPhotoModal = ({ isOpen, setModalOpen, label, chooseNewPhoto, deletePhoto }) => {

    return ( 
        <Modal
            visible={isOpen}
            onRequestClose={() => setModalOpen(false)}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitleView}>
                        <Pressable onPress={() => setModalOpen(!isOpen)}>
                            <Image style={styles.exitIcon} source={require('../../../../../../../assets/images/Close.png')} />
                        </Pressable>
                        <Text style={styles.modalTitle}>
                            {label}
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <ActionButton 
                            label='Choose New Photo'
                            customStyles={{ width: 250, marginTop: 10, marginBottom: 10 }}
                            onPress={chooseNewPhoto}
                        />
                        <ActionButton 
                            label='Delete Photo'
                            customStyles={{ backgroundColor: '#E51414', width: 250 }}
                            onPress={deletePhoto}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}