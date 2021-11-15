import React from 'react';
import { Modal, View, Text, Pressable, Image } from 'react-native';
import { IconButton } from '../../../../components';
import styles from './styles';

export const CookbookOptionsModal = ({ isOpen, setModalOpen, deletePress, editPress, sharePress }) => {
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
                        Cookbook Options
                    </Text>
                </View>
                <IconButton 
                    name='Delete Cookbook' 
                    iconSource={require('../../../../../assets/images/Close-White.png')} 
                    onPress={deletePress}
                />
                <IconButton 
                    name='Edit Cookbook' 
                    iconSource={require('../../../../../assets/images/pencil.png')}
                    onPress={() => {
                        setModalOpen(false);
                        editPress();
                    }}
                />
                <IconButton 
                    name='Share Cookbook' 
                    imageStyles={{ height: 30, width: 25 }}
                    iconSource={require('../../../../../assets/images/Share-White.png')} 
                />
            </View>
        </View>
    </Modal>
    )
}