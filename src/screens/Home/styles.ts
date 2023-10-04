import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#0D0D0D',
        height: 173
    },

    contentContainer: {
        padding: 24,
        paddingTop: 0
    },

    input: {
        backgroundColor: '#262626',
        padding: 16,
        borderRadius: 6,
        flex: 1,
        height: 54,
        borderColor: "#fff",
        borderWidth: 1,
    },

    inputOnFocus: {
        borderColor: "#5E60CE",
        borderWidth: 1,
        backgroundColor: '#262626',
        padding: 16,
        borderRadius: 6,
        flex: 1,
        height: 54
    },

    form: {
        flexDirection: 'row',
        gap: 4,
        marginBottom: 32,
        marginTop: -31 // 71 - 40
    },

    button: {
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: 6,
        padding: 18
    },

    status: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    list: {
        marginTop: 20
    },

    countContainer: {
        flexDirection: 'row',
        gap: 8
    },

    count: {
        color: '#D9D9D9',
        fontSize: 12,
        backgroundColor: '#333',
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 999
    }
});