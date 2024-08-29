import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack"
import { Informacoes, Cookie } from '../screens'

type InformacoesStackParamList = {
    Informacoes: undefined
    Cookie: undefined
}
type InformacaoScreenNavigationProp = StackNavigationProp<InformacoesStackParamList, 'Informacoes'>
export type InformacoesTypes = {
    navigation: InformacaoScreenNavigationProp
}
export function InformacaoNavigation() {
    const Stack = createStackNavigator<InformacoesStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Informacoes' component={Informacoes} />
            <Stack.Screen name='Cookie' component={Cookie} />
        </Stack.Navigator>
    )
}