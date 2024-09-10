import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent background
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    itemCard: {
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
    itemImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemCost: {
        fontSize: 16,
        color: 'green',
        marginBottom: 5,
    },
    itemPortion: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
    itemDetails: {
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
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
});
