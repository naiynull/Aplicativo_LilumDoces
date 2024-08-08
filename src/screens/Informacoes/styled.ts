import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
        color: '#aaa',
    },
    text: {
        fontSize: 16,
        color: '#ccc',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    column: {
        flex: 1,
        margin: 5,
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
        fontSize: 14,
        color: '#ddd',
    },
});


