import React from 'react';
import { Modal, View, Pressable, Text, Image } from 'react-native';
import styles from './styles';

export const UserDetailsModal = ({ isOpen, setModalOpen }) => {
    
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
                            User Details
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>First Name</Text>
                        <View style={styles.displayContainer}>
                            <Text style={styles.infoText}>Braden</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Last Name</Text>
                        <View style={styles.displayContainer}>
                            <Text style={styles.infoText}>Miller</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.displayContainer}>
                            <Text style={styles.infoText}>fake-email@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}