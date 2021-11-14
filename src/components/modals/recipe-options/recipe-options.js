import React from 'react';
import { Modal, View, Pressable, Text, Image } from 'react-native';
import { IconButton } from '../../icon-button/icon-button';
import styles from './styles';

export const RecipeOptionsModal = ({ isOpen, setModalOpen }) => {
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
                            <Image style={styles.exitIcon} source={require('../../../../assets/images/Close.png')} />
                        </Pressable>
                        <Text style={styles.modalTitle}>
                            Recipe Options
                        </Text>
                    </View>
                    <IconButton 
                        name='Delete Recipe' 
                        iconSource={require('../../../../assets/images/Close-White.png')} 
                    />
                    <IconButton 
                        name='Edit Recipe' 
                        iconSource={require('../../../../assets/images/pencil.png')} 
                    />
                    <IconButton 
                        name='Share Recipe' 
                        imageStyles={{ height: 30, width: 25 }}
                        iconSource={require('../../../../assets/images/Share-White.png')} 
                    />
                </View>
            </View>
        </Modal>
    )
}