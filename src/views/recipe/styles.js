import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    internalContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        color: 'black',
        marginTop: 50,
    },
    images: {
        maxWidth: 300,
        maxHeight: 200,
        marginTop: 10,
    },
    sectionView: {
        width: '85%',
        borderTopColor: 'black',
        borderTopWidth: 1,
        paddingTop: 20,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },  
    sectionTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: 'black',
    },
    listContainer: {
        width: '90%',
    }, 
    ingredient: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'black', 
        marginLeft: 10,
    },
    instructionContainer: {
        flexDirection: 'row',
    },
    number: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'black', 
        marginLeft: 10,
    },
    instruction: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'black', 
        marginLeft: 5,
    },
});
