import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    centeredView: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    modalView: {
        width: '90%',
        backgroundColor: '#F7F7F7',
        borderRadius: 20,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1,
        borderColor: 'black',
    },  
    modalTitleView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    exitIcon: {
        height: 20,
        width: 20,
    },
    modalTitle: {
        width: '85%',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        color: 'black',
        lineHeight: 27,
    },
    buttonView: {
        width: '100%',
        alignItems: 'flex-end',
    },
});