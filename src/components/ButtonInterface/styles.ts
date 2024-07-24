import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
     buttonPrimary:{
        backgroundColor: colors.principal,
        borderRadius: 100,
        margin: 10,
     },
     buttonSecondary:{
        backgroundColor: colors.principal,
        borderRadius: 100,
        margin: 10,
     },
     buttonThird:{
        backgroundColor: colors.principal,
        borderRadius: 5,
        margin: 10,
     },
     text: {
        color: colors.branco,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center"
     }
})