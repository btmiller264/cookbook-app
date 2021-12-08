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
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    labelView: {
        width: '75%',
    },  
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        textAlign: 'center'
    },  
    buttonView: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
});