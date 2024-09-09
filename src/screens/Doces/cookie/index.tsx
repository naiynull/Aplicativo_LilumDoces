import React from 'react';
import { ImageBackground, Text, View, Image, TouchableOpacity, Linking, ScrollView, ImageSourcePropType } from 'react-native';
import { styleContainer } from '../../../styles/globalstyle';
import { styles } from './styled';
import { MenuTabTypes } from '../../../navigations/MenuBottomtab.navigation';
import { useAuth } from '../../../hook/auth';

// Defina a interface para o Cookie
interface Cookie {
    name: string;
    price: string;
    size: string;
    description: string;
    image: ImageSourcePropType; // Use 'ImageSourcePropType' para tipos de imagem
}

// Dados dos cookies com o tipo definido
const cookies: Cookie[] = [
    {
        name: 'Cookie de Chocolate',
        price: 'R$ 3,00',
        size: 'Médio',
        description: 'Um clássico cookie de chocolate com pedaços de chocolate derretido.',
        image: require('../../../asset/cookiedechocolate.jpg'),
    },
    {
        name: 'Cookie paçoca',
        price: 'R$ 3,00',
        size: 'Médio',
        description: 'Cookie de paçoca irresistível.',
        image: require('../../../asset/cookiepacoca.jpg'),
    },
    {
        name: 'Cookie sem glúten e lactose',
        price: 'R$ 4,00',
        size: 'Médio',
        description: 'Cookie sem lactose e sem derivados de leite.',
        image: require('../../../asset/cookiezerolactose.jpg'),
    },
];

export function Cookie({ navigation }: MenuTabTypes) {
    const Fundo = require('../../../asset/fundo2.png');
    const { user, signOut } = useAuth();

    // Função para gerar a mensagem
    const generateMessage = (cookie: Cookie) => {
        return `Olá! Gostaria de comprar o ${cookie.name}. Preço: ${cookie.price}. Tamanho: ${cookie.size}. Descrição: ${cookie.description}.`;
    };

    // Função para abrir o WhatsApp
    const handleWhatsApp = (cookie: Cookie) => {
        const message = generateMessage(cookie);
        const url = `https://wa.me/5535997787023?text=${encodeURIComponent(message)}`;
        Linking.openURL(url).catch((err) => {
            console.error('Erro ao abrir WhatsApp:', err);
            alert('Não foi possível abrir o WhatsApp.');
        });
    };

    return (
        <ImageBackground source={Fundo} style={styleContainer.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    {cookies.map((cookie, index) => (
                        <View key={index} style={styles.cookieCard}>
                            <Image source={cookie.image} style={styles.cookieImage} />
                            <Text style={styles.cookieName}>{cookie.name}</Text>
                            <Text style={styles.cookiePrice}>{cookie.price}</Text>
                            <Text style={styles.cookieSize}>{cookie.size}</Text>
                            <Text style={styles.cookieDescription}>{cookie.description}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleWhatsApp(cookie)}
                            >
                                <Text style={styles.buttonText}>Comprar pelo WhatsApp</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
