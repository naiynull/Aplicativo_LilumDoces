import React from 'react';
import { ImageBackground, Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "./styled"; // Certifique-se de que este caminho está correto
import { MenuTabTypes } from "../../navigations/MenuBottomtab.navigation";

export function Informacoes({ navigation }: MenuTabTypes) {
    const Fundo = require('../../asset/img 4.png');
    
    return (
        <ImageBackground source={Fundo} style={styleContainer.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.section}>
                    <Text style={styles.title}>Delícias em Cada Mordida: Nossa Coleção de Doces</Text>
                    <Text style={styles.subtitle}>Sabor Inigualável</Text>
                    <Text style={styles.text}>Super Nintendo</Text>

                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Image source={require('../../asset/copoF.jpg')} style={styles.image} />
                            <Text style={styles.header}>cookie</Text>
                            <Text style={styles.paragraph}>
                           Sabor irresistível! Nosso cookie é crocante por fora, macio por dentro e recheado com chocolate. 
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Image source={require('../../asset/bg.jpg')} style={styles.image} />
                            <Text style={styles.header}>Brigadeiro</Text>
                            <Text style={styles.paragraph}>
                           Brigadeiro cremoso e irresistível! Perfeito para adoçar seu dia com um toque de chocolate e alegria. 
                            </Text>
                        </View>
                

                    <View style={styles.column}>
                            <Image source={require('../../asset/gl.jpeg')} style={styles.image} />
                            <Text style={styles.header}>Brownie</Text>
                            <Text style={styles.paragraph}>
                            Brownie irresistível! Uma explosão de chocolate a cada mordida, com um toque suave e decadente. Perfeito para adoçar seu dia!
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Image source={require('../../asset/ck.jpeg')} style={styles.image} />
                            <Text style={styles.header}>cupcake</Text>
                            <Text style={styles.paragraph}>
                            Cupcake fofinho e delicioso, coberto com um glacê irresistível! Cada mordida é uma explosão de sabor e doçura. Ideal para qualquer momento especial!
                            </Text>
                        </View>
                    </View>

                    
                </View>

                {/* Repita para outros jogos conforme necessário */}

            </ScrollView>
        </ImageBackground>
    );
}
