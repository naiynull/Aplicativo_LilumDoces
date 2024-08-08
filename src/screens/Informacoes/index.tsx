import React from 'react';
import { ImageBackground, Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "./styled"; // Se você estiver usando estilos adicionais
import { MenuTabTypes } from "../../navigations/MenuBottomtab.navigation";

export function Informacoes({ navigation }: MenuTabTypes) {
    const Fundo = require('../../asset/img 4.png');
    
    return (
        <ImageBackground source={Fundo} style={styleContainer.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.section}>
                    <Text style={styles.title}>The Legend of Zelda a Link to the Past</Text>
                    <Text style={styles.subtitle}>Nintendo</Text>
                    <Text style={styles.text}>Super Nintendo</Text>

                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Image source={require('../../asset/img 3.png')} style={styles.image} />
                            <Text style={styles.header}>Criação</Text>
                            <Text style={styles.paragraph}>
                                The Legend of Zelda: A Link to the Past é o terceiro jogo da série The Legend of Zelda, e foi lançado em 1991 no Japão e em 1992 na América do Norte e Europa.
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Image source={require('../../asset/img 3.png')} style={styles.image} />
                            <Text style={styles.header}>História</Text>
                            <Text style={styles.paragraph}>
                                A trama de A Link to the Past concentra-se no herói Link em uma jornada para salvar a terra de Hyrule, impedir a volta de Ganon e libertar as sete donzelas descendentes dos antigos sábios.
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Image source={require('../../asset/img 3.png')} style={styles.image} />
                            <Text style={styles.header}>Jogabilidade</Text>
                            <Text style={styles.paragraph}>
                                Link é capaz de realizar diversas ações, como pular de penhascos para nadar, empurrar e levantar objetos, e usar uma variedade de ferramentas, armas, armaduras e escudos.
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Image source={require('../../asset/img 3.png')} style={styles.image} />
                            <Text style={styles.header}>Curiosidade</Text>
                            <Text style={styles.paragraph}>
                                Em A Link to the Past, ocorre uma das primeiras demonstrações via videogame de que maltratar animais não é legal. Se Link insistir em agredir os Cuccos (aquelas galinhas simpáticas), aparecerá um bando feroz delas do céu, capaz de nocauteá-lo se não cair fora rapidinho.
                            </Text>
                        </View>
                    </View>
                    <Image source={require('../../asset/img 3.png')} style={styles.image} />
                    <Text style={styles.header}>ctrl de aventuras</Text>
                    <Text style={styles.paragraph}>
                        Numa noite escura e de tempestade, o jovem Link embarca numa aventura inesquecível, tanto para ele como para ti! A Princess Zelda foi capturada e um mago maléfico tenta libertar Ganon, o rei das trevas. Apenas Link tem a coragem para salvar Hyrule!
                    </Text>
                </View>

                {/* Repeat for other games as needed */}

            </ScrollView>
        </ImageBackground>
    );
}


   