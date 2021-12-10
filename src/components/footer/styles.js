import { Platform, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 80 : 60,
        backgroundColor: '#C4C4C4',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    iconContainer: {
		paddingTop: Platform.OS === 'ios' ? 10 : 0,
        justifyContent: Platform.OS === 'ios' ? 'flex-start' : 'center',
        alignItems: 'center',
    },
    settingsContainer: {
        height: 40,
        width: 40,
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