import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import { MenuTabs } from './MenuBottomtab.navigation';
import { colors } from '../styles/colors'
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from "../hook/auth";
import { Perfil } from '../screens';

type MenuDrawerParam = {
    Tab: undefined
    Perfil: undefined

}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Tab">
export type DrawerTypes = {
    navigation: MenuScreenNavigation
}

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    const { user, signOut } = useAuth()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'rgba(241, 228, 212, 1) ' },
            headerTintColor: colors.principal,
            drawerStyle: {
                backgroundColor: 'rgba(100, 9, 6, 0.6)',
            },
            drawerActiveTintColor: colors.branco,
            drawerInactiveTintColor: colors.preto
        }}>

            <Drawer.Screen name='Tab' component={MenuTabs}
                options={{
                    drawerLabel: 'Pagina Inicial',
                    headerTitle: '',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.branco} />
                    ),
                }}

            />

            <Drawer.Screen name='Perfil' component={Perfil}
                options={{
                    drawerLabel: 'Sobre Nós',
                    headerTitle: 'Sobre Nós',
                    drawerIcon: () => (
                        <Ionicons name="information-circle" size={24} color={colors.branco} />
                    ),
                }}
            />
             

        </Drawer.Navigator>
    )
}