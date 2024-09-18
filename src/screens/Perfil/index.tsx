import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground, Linking, Image } from 'react-native';
import { useAuth } from '../../hook/auth';
import { FontAwesome5 } from '@expo/vector-icons';
import { ComponentButtonInterface } from '../../components';
import { colors } from '../../styles/colors';
import { styles } from './styles'; // Corrigido a importação para o arquivo de estilos

export function Perfil() {
    const { signOut } = useAuth();
    const login = require('../../asset/login.png');

    const handleInstagramPress = () => {
        Linking.openURL('https://www.instagram.com/lilumdoces');
    };

    const handleWebsitePress = () => {
        Linking.openURL('https://wa.me/5535997787023');
    };

    return (
        <ImageBackground source={login} style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Image source={require('../../asset/perfil.png')} style={styles.profileImage} />
                    <Text style={styles.title}>Lilum Doces</Text>
                    <Text style={styles.description}>
                        Sua doceria favorita, oferecendo as melhores guloseimas e doces artesanais com amor e qualidade.
                    </Text>
                </View>

                <View style={styles.linksContainer}>
                    <Text style={styles.redes}>Siga-nos nas redes sociais</Text>
                    <View style={styles.socials}>
                        <TouchableOpacity onPress={handleInstagramPress} style={styles.iconContainer}>
                            <FontAwesome5 name="instagram" size={30} color={colors.principal} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleWebsitePress} style={styles.iconContainer}>
                            <FontAwesome5 name="whatsapp" size={30} color={colors.principal} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ComponentButtonInterface
                    title="Sair"
                    type="primary"
                    onPressI={async () => await signOut()}
                    style={styles.signOutButton}
                />
            </View>
        </ImageBackground>
    );
}
