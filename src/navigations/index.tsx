import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from './login.navigation'
import { useAuth } from '../hook/auth';
import { DrawerNavigation } from './MenuDrawer.navigation';
import { Loading } from "../components/Loading"

export function Navigation() {
    const { user, loading } = useAuth()
    if (loading) {
        return <Loading />
    }
    return (
        <NavigationContainer>
            {user?.token ? <DrawerNavigation /> : <LoginNavigation />}
        </NavigationContainer>
    )
}