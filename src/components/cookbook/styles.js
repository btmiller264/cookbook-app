import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        height: 160,
        width: 150,
        borderRadius: 10,
        marginTop: 10,
    },
    nameContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7DA2A9',
        borderRadius: 10,
        height: 150, 
        width: 150,
    },
    name: {
        color: '#F7F7F7',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        width: 100,
        textAlign: 'center',
    },
    iconContainer: {
        position: 'absolute',
        right: 1,
        zIndex: 1,
        top: 1,
    },  
    icon: {
        height: 50,
        width: 50,
    }
});