import React, { useState } from 'react';
import { View, Text, Alert, Image, Pressable } from 'react-native';
import { AddButton } from '../../../../components';
import { launchImageLibrary } from 'react-native-image-picker';
import { EditPhotoModal } from './components';
import styles from './styles';

export const AddPhoto = ({ photos, setPhotos }) => {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState('');

    let options = {
        title: 'You can choose one image',
        maxWidth: 256,
        maxHeight: 256,
        noData: true,
        mediaType: 'photo',
        storageOptions: {
          skipBackup: true
        }
    };

    const choosePhoto = () => {
        launchImageLibrary(options, response => {      
            if (response.didCancel) {
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                Alert.alert('Error with Image Picker. Please try again.');
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = response.assets[0].uri;
                setPhotos([...photos, source]);
            }
        });
    }

    const chooseNewPhoto = () => {
        launchImageLibrary(options, response => {      
            if (response.didCancel) {
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                Alert.alert('Error with Image Picker. Please try again.');
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = response.assets[0].uri;
                photos[photos.indexOf(currentPhoto)] = source;
                setPhotos(photos);
                setEditModalOpen(false);
            }
        });
    }

    const deletePhoto = () => {
        photos.splice(photos.indexOf(currentPhoto), 1);
        setEditModalOpen(false);
    }


    return (
        <View style={styles.sectionView}>
            <Text style={photos.length === 0 ? styles.sectionTitleEmpty : styles.sectionTitle}>Photos</Text>
            <View style={styles.imagesContainer}>
                {photos.map((entry) => {
                    return (
                        <Pressable style={styles.imageContainer} onPress={() => {
                            setCurrentPhoto(entry);
                            setEditModalOpen(true);
                        }} key={entry}>
                            <Image style={styles.image} source={typeof entry === 'string' ? { uri: entry } : entry} resizeMode='contain' />
                        </Pressable>
                    )
                })}
            </View>
            <AddButton customStyles={{ width: '100%', marginTop: 10 }} label='Photo' onPress={() => choosePhoto()} />
            <EditPhotoModal 
                label='Edit Photo'
                isOpen={editModalOpen}
                setModalOpen={setEditModalOpen}
                chooseNewPhoto={chooseNewPhoto}
                deletePhoto={deletePhoto}
            />
        </View>
    )
}