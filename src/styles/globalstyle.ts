import { StyleSheet } from "react-native"
import {colors} from "../styles/colors"

export const styleContainer = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
export const stylesglobal = StyleSheet.create({

    cabecalho:{
        alignSelf: "center",
      
    },

    textoTitulo: {
        fontSize: 28,
        color: '#fff',
        marginBottom: 10,
    },

    caixaDeTexto: {
        alignSelf: "center",
        width: 400,
        paddingTop: 30,
        paddingBottom: 30
    },

    titulo: {
        textAlign: "justify",
    },

    textoConteudo: {
        color: colors.preto,
        fontSize: 22,
        fontFamily:'',
        textAlign: 'center',
    },

    

})