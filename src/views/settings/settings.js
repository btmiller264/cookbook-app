import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Footer } from '../../components';
import { IconButton } from '../../components';
import { UserDetailsModal } from './components';
import styles from './styles';

export const SettingsView = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.internalContainer} style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.buttonView}>
                <IconButton 
                    name='User Details'
                    iconSource={require('../../../assets/images/User.png')}
                    onPress={() => setModalOpen(true)}
                />
                <IconButton 
                    name='Log Out'
                    iconSource={require('../../../assets/images/Logout.png')}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }]
                    })}
                />
            </View>
            <UserDetailsModal 
                isOpen={modalOpen}
                setModalOpen={setModalOpen}
            />
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    )
}