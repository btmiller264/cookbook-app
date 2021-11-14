import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#7DA2A9',
        height: 60,
        width: '100%',
        borderRadius: 10,
        marginTop: 20,
    },
    pressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15,
    },
    image: {
        height: 25,
        width: 25,
    },
    name: {
        color: '#F7F7F7',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        marginLeft: 10,
        lineHeight: 25,
    },
});