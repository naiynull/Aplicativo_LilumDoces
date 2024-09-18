import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack"
import { Informacoes, Cookie,Biscoito,Brigadeiro,Brownie,ConeRecheado,Cupcake,Donuts, BolodePote } from '../screens'

type InformacoesStackParamList = {
    Informacoes: undefined
    Cookie: undefined
    Brigadeiro:undefined
    Brownie:undefined
    Biscoito:undefined
    ConeRecheado:undefined
    Cupcake:undefined
    Donuts:undefined
    BolodePote:undefined

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
            <Stack.Screen name='Brigadeiro' component={Brigadeiro} />
            <Stack.Screen name='Brownie' component={Brownie} />
            <Stack.Screen name='Biscoito' component={Biscoito} />
            <Stack.Screen name='ConeRecheado' component={ConeRecheado} />
            <Stack.Screen name='Cupcake' component={Cupcake} />
            <Stack.Screen name='BolodePote' component={BolodePote} />
        </Stack.Navigator>
    )
}