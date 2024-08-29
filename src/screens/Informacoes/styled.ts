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
        backgroundColor:'rgba(232, 216, 197, 1)',
        borderRadius: 10,
      
        
    },
    image: {
        width: '90%',
        height: 150,
        marginBottom: 10,
        alignSelf:'center',
        marginTop: 12,
    },
    header: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 5,
        marginLeft:15,
    },
    paragraph: {
        fontSize: 13,
        color: '#778899',
        marginLeft:12,
       
        
    },

 
});
