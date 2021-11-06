import { StyleSheet } from "react-native";

export default cstyles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F7F7',
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        marginBottom: 50,
    },
    inputView: {
        width: "80%",
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        height: 50,
        marginBottom:25,
        justifyContent:"center",
    },
    textInput: {
        height: 50,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    buttonView: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        width: 100,
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7DA2A9",
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold'
    }
});