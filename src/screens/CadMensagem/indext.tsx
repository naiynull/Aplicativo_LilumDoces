import { useState } from "react";
import { MessageTypes } from "../../navigations/menssage.navigaton";
import { ImageBackground, Alert, KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { colors } from '../../styles/colors';
import { styleContainer } from '../../styles/globalstyle';
import { ComponentButtonInterface } from "../../components"
import { IMessage } from "../../services/data/Message";
import { useAuth } from "../../hook/auth"
import { AxiosError } from "axios";
import { apiMessage } from "../../services/data";
import { styles } from "./styled";


export function CadMensagem({ navigation }: MessageTypes) {
    const slide = require('../../asset/image 2.png')
    const [data, setData] = useState<IMessage>();
    const { setLoading } = useAuth();
    function handleChange(item: IMessage) {
        setData({ ...data, ...item });
    }
    async function handleCadMessage() {
        if (data?.title && data.message) {
            setLoading(true)
            try {
                await apiMessage.store(data)
                Alert.alert("Mensagem cadastrada!")
                navigation.navigate("Message")
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos...")
        }
    }

    return (
        <ImageBackground source={slide} style={styleContainer.container}>
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastrar Mensagem</Text>
                <View style={styles.formRow}>
                    <TextInput
                        placeholderTextColor={colors.principal}
                        style={styles.input}
                        placeholder="título"
                        onChangeText={(i) => handleChange({ title: i })}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholderTextColor={colors.principal}
                        style={styles.input}
                        placeholder="mensagem"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(i) => handleChange({ message: i })}
                    />
                </View>
                <ComponentButtonInterface title='Enviar' type='primary'
                    onPressI={handleCadMessage} />
                <ComponentButtonInterface title='Voltar' type='secondary'
                    onPressI={() => navigation.navigate("Message")} />
            </KeyboardAvoidingView>
        </View>
        </ImageBackground>

    )
}