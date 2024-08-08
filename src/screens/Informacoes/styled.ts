import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#5F0C10',
    },
    text: {
        fontSize: 16,
        color: '#ccc',
        marginBottom: 20,
        
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Distribui as colunas uniformemente
        marginBottom: 20,
    },
    column: {
        width: '48%', // Ajusta a largura das colunas para duas por linha
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    header: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 15,
        color: '#778899',
        
    },
});
