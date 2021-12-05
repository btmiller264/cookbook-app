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
        marginTop: 20,
    },
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
    buttonView: {
        width: '90%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 20,
    }
});