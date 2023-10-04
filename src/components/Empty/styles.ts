import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        marginTop: 20,
        paddingTop: 48,
        paddingBottom: 48,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },

    firstLine: {
        fontWeight: '700',
        color: '#808080'
    },

    secondLine: {
        fontWeight: '400',
        color: '#808080'
    }
});