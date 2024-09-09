import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import { MenuTabs } from './MenuBottomtab.navigation';
import { colors } from '../styles/colors'
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from "../hook/auth";
import { Camera, QrCode, Imagens } from '../screens';

type MenuDrawerParam = {
    Tab: undefined
    Camera: undefined
    Qrcode: undefined
    Imagens: undefined

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
            <Drawer.Screen name='Camera' component={Camera}
                options={{
                    drawerLabel: 'Câmera',
                    headerTitle: '',
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="camera-wireless-outline" size={24} color="white" />
                    ),
                }}
            />
            <Drawer.Screen name='Imagens' component={Imagens}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name="picture-o" size={24} color={colors.branco} />
                    ),
                }}
            />
            <Drawer.Screen name='Qrcode' component={QrCode}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="qrcode-scan" sixe={24} color={colors.branco} />
                    ),
                }}
            />

        </Drawer.Navigator>
    )
}