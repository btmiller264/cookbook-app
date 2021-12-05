import React, { useState, useEffect } from 'react';
import { View, Modal, Pressable, Image, Text, TextInput } from 'react-native';
import { ActionButton, Input } from '../..';
import styles from './styles';

export const TextModal = ({ isOpen, setModalOpen, onDone, label, initialValue, placeholder, inputStyles, textStyles }) => {
    const [name, setName] = useState(initialValue);
    
    useEffect(() => {
        setName(initialValue)
    }, [initialValue])

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
                            setName('');
                            setModalOpen(!isOpen)
                        }}
                    >
                        <Image style={styles.exitIcon} source={require('../../../../assets/images/Close.png')} />
                    </Pressable>
                    <Text style={styles.modalTitle}>
                        {label}
                    </Text>
                </View>
                <Input 
                    placeholder={placeholder}
                    value={name}
                    onChange={setName}
                    defaultValue={initialValue}
                    inputStyles={inputStyles}
                    textStyles={textStyles}
                />
                <View style={styles.buttonView}>
                    <ActionButton label='Done' onPress={() => {
                        onDone(name);
                        setName('');
                    }} />
                </View>
            </View>
        </View>
    </Modal>
    )
}