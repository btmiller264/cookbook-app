import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F7F7F7',
    },
    title: {
        marginTop: 20,
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        textTransform: 'capitalize',
    },
    cookbooksView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '90%',
    },
    addButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7DA2A9',
        height: 150,
        width: 150,
        borderRadius: 10,
        marginTop: 20,
    },
    addIcon: {
        width: 75,
        height: 75,
    },
});
