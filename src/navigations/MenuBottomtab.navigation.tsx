import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home, Informacoes } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';
import { FontAwesome5, SimpleLineIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from "../styles/colors"
import { InformacaoNavigation } from './informacoes.navigation'
import { Perfil } from '../screens';


type MenuTabParam = {
    Home: undefined
    Cardápio: undefined
    Perfil: undefined

}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Home">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveBackgroundColor: 'rgba(232, 216, 197, 1)',
            tabBarActiveTintColor: colors.principal,
            headerShown: false,
            tabBarInactiveBackgroundColor: 'rgba(232, 216, 197, 1)',
            tabBarInactiveTintColor: colors.branco,
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Cardápio" component={InformacaoNavigation}
                options={{
                    tabBarIcon: () => (
                        <SimpleLineIcons name="book-open" size={24} color="black" />
                    )

                }}

            />

        </Tab.Navigator>


    )

}