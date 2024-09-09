import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    cookieCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        marginVertical: 10,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cookieImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    cookieName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cookiePrice: {
        fontSize: 16,
        color: 'green',
        marginBottom: 5,
    },
    cookieSize: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
    cookieDescription: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#25D366', // Cor do WhatsApp
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
