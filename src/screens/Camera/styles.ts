import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: "center",
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
        width: '100%',
        // width: Dimensions.get("screen").width - 40, // Diminuindo a largura para adicionar margem
        //height: Dimensions.get("screen").width - 40, // Diminuindo a altura para manter a proporção
        //marginHorizontal: 20, // Adicionando margem horizontal para espaço lateral
        //borderWidth: 3, // Largura da borda
        //borderColor: colors.principal, // Cor da borda (você pode definir isso em seu arquivo de cores ou escolher uma cor direta)
    },
    headerCamera: {

        flex: 1,
        alignItems: "center",
    },
    footerCamera: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: "center",
    },
    ball: {
        width: 70,
        height: 70,
        backgroundColor: colors.principal,
        borderRadius: 35,
    },
    headerSave: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});