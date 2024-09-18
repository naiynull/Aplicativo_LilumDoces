import React from 'react';
import { ImageBackground, Text, View, Image, TouchableOpacity, Linking, ScrollView, ImageSourcePropType } from 'react-native';
import { styleContainer } from '../../../styles/globalstyle';
import { styles } from './styled';
import { MenuTabTypes } from '../../../navigations/MenuBottomtab.navigation';
import { useAuth } from '../../../hook/auth';

interface Item {
    title: string;
    cost: string;
    portion: string;
    details: string;
    picture: ImageSourcePropType;
    inStock: boolean;
}

const items: Item[] = [
    {
        title: 'Bolo de Pote de Brigadeiro',
        cost: 'R$ 8,00',
        portion: 'Médio',
        details: 'Uma explosão de sabor com chocolate cremoso e crocante.',
        picture: require('../../../asset/boloc.png'),
        inStock: true,
    },
    {
        title: 'Bolo de Pote de Paçoca',
        cost: 'R$ 8,00',
        portion: 'Médio',
        details: 'Combinação irresistível de doce de amendoim e crocância.',
        picture: require('../../../asset/bolop.png'),
        inStock: true,
    },
    {
        title: 'Bolo de Pote de Ninho',
        cost: 'R$ 4,00',
        portion: 'Médio',
        details: 'Uma opção especial, leve e saborosa.',
        picture: require('../../../asset/bolon.png'),
        inStock: true,
    },
];


export function BolodePote({ navigation }: MenuTabTypes) {
    const backgroundImage = require('../../../asset/fundo2.png');
    const { user, signOut } = useAuth();

    const createMessage = (item: Item) => {
        return `✨ Olá! Seja bem vindo\n Gostaria de comprar o ${item.title}. \n Preço: ${item.cost}. \n Tamanho: ${item.portion}.`;
    };

    const openWhatsApp = (item: Item) => {
        const message = createMessage(item);
        const url = `https://wa.me/5535997787023?text=${encodeURIComponent(message)}`;
        Linking.openURL(url).catch((err) => {
            console.error('Erro ao abrir WhatsApp:', err);
            alert('Não foi possível abrir o WhatsApp.');
        });
    };

    return (
        <ImageBackground source={backgroundImage} style={styleContainer.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    {items.map((item, index) => (
                        <View
                            key={index}
                            style={[
                                styles.itemCard,
                                { backgroundColor: item.inStock ? 'white' : '#f8d7da' }
                            ]}
                        >
                            <Image source={item.picture} style={styles.itemImage} />
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemCost}>{item.cost}</Text>
                            <Text style={styles.itemPortion}>{item.portion}</Text>
                            <Text style={styles.itemDetails}>{item.details}</Text>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    { backgroundColor: item.inStock ? '#28a745' : '#dc3545' }
                                ]}
                                onPress={() => item.inStock && openWhatsApp(item)}
                            >
                                <Text style={styles.buttonText}>
                                    {item.inStock ? 'Comprar pelo WhatsApp' : 'Indisponível'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
