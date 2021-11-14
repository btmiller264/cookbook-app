import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#7DA2A9',
        height: 60,
        width: '90%',
        borderRadius: 10,
        marginTop: 20,
    },
    nameContainer: {
        flex: 1,
        height: 60,
        justifyContent: 'center',
    },
    name: {
        color: '#F7F7F7',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        marginLeft: 20,
    },
    imageContainer: {
        height: 60,
        justifyContent: 'center',
    },
    image: {
        height: 40,
        width: 40,
        marginRight: 10,
    }
});