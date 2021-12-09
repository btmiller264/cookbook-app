import React from 'react';
import { Modal, View, Pressable, Text, Image } from 'react-native';
import Share from 'react-native-share';
import { IconButton } from '../..';
import styles from './styles';

export const OptionsModal = ({ isOpen, setModalOpen, label, editPress, deletePress }) => {
    
    const url = "https://awesome.contents.com/";
    const title = "Awesome Contents";
    const message = `Check out this ${label}!`;
    
    const options = {
      title,
      url,
      message,
    };

    const share = async (customOptions = options) => {
        try {
            await Share.open(customOptions);
          } catch (err) {
            console.log(err);
          }
    }
    
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
                            {`${label} Options`}
                        </Text>
                    </View>
                    <IconButton 
                        name={`Delete ${label}`}
                        iconSource={require('../../../../assets/images/Close-White.png')} 
                        onPress={deletePress}
                    />
                    <IconButton 
                        name={`Edit ${label}`} 
                        iconSource={require('../../../../assets/images/pencil.png')}
                        onPress={editPress} 
                    />
                    <IconButton 
                        name={`Share ${label}`}
                        imageStyles={{ height: 30, width: 25 }}
                        iconSource={require('../../../../assets/images/Share-White.png')} 
                        onPress={async () => {
                            await share();
                          }}
                    />
                </View>
            </View>
        </Modal>
    )
}