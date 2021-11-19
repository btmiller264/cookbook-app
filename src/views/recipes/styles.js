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
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        color: 'black',
        marginTop: 20,
    },
    addContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        width: '90%',
        backgroundColor: '#7DA2A9',
        borderRadius: 10,
        marginTop: 20,
    },
    addIcon: {
        height: 35,
        width: 35,
        marginLeft: 10,
    },
    addLabel: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        marginLeft: 10,
        color: '#F7F7F7',
        paddingTop: 5,
    }
});
