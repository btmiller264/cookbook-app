import React from 'react';
import { View, Modal, Text } from 'react-native';
import { ActionButton } from '../..';
import styles from './styles';

export const AreYouSureModal = ({ label, isOpen, setModalOpen, onDelete, onCancel }) => {
    return ( 
        <Modal
            visible={isOpen}
            onRequestClose={() => setModalOpen(false)}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.labelView}>
                        <Text style={styles.label}>Are you sure you want to delete this {label}?</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <ActionButton 
                            label='Delete' 
                            customStyles={{ backgroundColor: '#E51414' }}
                            onPress={onDelete}
                        />
                        <ActionButton 
                            label='Cancel' 
                            customStyles={{ backgroundColor: '#F7F7F7', borderWidth: 2, borderColor: 'black' }}
                            textStyles={{ color: '#7DA2A9' }} 
                            onPress={onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}