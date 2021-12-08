import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    centeredView: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    modalView: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        borderRadius: 20,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderColor: 'black',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
    infoContainer: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 20,
    },
    label: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: 'black'
    },
    displayContainer: {
        borderRadius: 10,
        backgroundColor: '#7DA2A9',
        width: '100%',
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    infoText: {
        paddingLeft: 10,
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: '#F7F7F7'
    },
});
