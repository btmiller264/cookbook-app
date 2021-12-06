import React from 'react';
import { View, Text, Alert, Image, Pressable } from 'react-native';
import { AddButton } from '../../../../components';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from './styles';

export const AddPhoto = ({ photos, setPhotos }) => {

    const choosePhoto = () => {
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


    return (
        <View style={styles.sectionView}>
            <Text style={photos.length === 0 ? styles.sectionTitleEmpty : styles.sectionTitle}>Photos</Text>
            <View style={styles.imagesContainer}>
                {photos.map((entry) => {
                    return (
                        <Pressable style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: entry }} key={entry} resizeMode='contain' />
                        </Pressable>
                    )
                })}
            </View>
            <AddButton customStyles={{ width: '100%', marginTop: 10 }} label='Photo' onPress={() => choosePhoto()} />
        </View>
    )
}