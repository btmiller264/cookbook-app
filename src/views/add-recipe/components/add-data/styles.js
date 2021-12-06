import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    sectionView: {
        width: '90%',
        borderTopColor: 'black',
        borderTopWidth: 1,
        paddingTop: 5,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },  
    sectionTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    sectionTitleEmpty: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: 'black',
    },
    entryContainer: {
        width: '100%',
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    entry: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'black', 
    },
});