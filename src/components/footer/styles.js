import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#C4C4C4',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },  
    icon: {
        height: 40,
        width: 40,
    },
    label: {
        fontFamily: 'Poppins-Medium',
        fontSize: 8,
    },
});