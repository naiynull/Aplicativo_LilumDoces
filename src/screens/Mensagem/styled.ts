import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    item: {
        backgroundColor: 'rgba(100, 9, 6, 0.6)',
        width: 370,
        marginTop: 20,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 20,
        padding: 10,
      
    },
    botao: {
        position: "absolute",
        paddingBottom: 1,
        paddingRight: 0,
    }
})