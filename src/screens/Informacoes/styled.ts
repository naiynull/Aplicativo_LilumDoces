import { StyleSheet } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover', // Ensure the background image covers the screen
    },
    scrollContainer: {
        padding: 15,
    },
    section: {
        marginBottom: 20,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.principal,
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    item: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        backgroundColor: '#FFF', // White background for each item
        borderRadius: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    itemTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color:colors.azul,
        marginBottom: 5,
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});


