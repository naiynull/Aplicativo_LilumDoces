import React from 'react';
import { ImageBackground, Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "./styled"; // Certifique-se de que este caminho está correto
import { InformacoesTypes } from "../../navigations/informacoes.navigation";

export function Informacoes({ navigation }: InformacoesTypes) {
    const Fundo = require('../../asset/img 4.png');
    
    return (
        <ImageBackground source={Fundo} style={styleContainer.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
    
                <View style={styles.section}>
                    <Text style={styles.title}>Delícias em Cada Mordida: Nossa Coleção de Doces</Text>
                    <Text style={styles.subtitle}>Sabor Inigualável</Text>
                    <Text style={styles.text}>Super Docinhos</Text>
                
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.column} onPress={()=> navigation.navigate("Cookie")}>
                            <Image source={require('../../asset/copoF.jpg')} style={styles.image} />
                            <Text style={styles.header}>cookie</Text>
                            <Text style={styles.paragraph}>
                            Crocância de muito amor! 
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.column}>
                            <Image source={require('../../asset/bg.jpg')} style={styles.image} />
                            <Text style={styles.header}>Brigadeiro</Text>
                            <Text style={styles.paragraph}>
                           Brigadeiro cremoso e irresistível!
                            </Text>
                        </View>
                        </View>
                
                        <View style={styles.row}>
                    <View style={styles.column}>
                            <Image source={require('../../asset/gl.jpeg')} style={styles.image} />
                            <Text style={styles.header}>Brownie</Text>
                            <Text style={styles.paragraph}>
                            Brownie irresistível!
                            </Text>
                            <Text></Text>
                        </View>
                        <View style={styles.column}>
                            <Image source={require('../../asset/ck.jpeg')} style={styles.image} />
                            <Text style={styles.header}>cupcake</Text>
                            <Text style={styles.paragraph}>
                            Cupcake fofinho e delicioso!
                            </Text>
                        </View>
                    </View>
                    </View>

                    <View style={styles.row}>
                    <View style={styles.column}>
                            <Image source={require('../../asset/donuts.jpg')} style={styles.image} />
                            <Text style={styles.header}>Donuts</Text>
                            <Text style={styles.paragraph}>
                            Brownie irresistível!
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Image source={require('../../asset/Cone.jpg')} style={styles.image} />
                            <Text style={styles.header}>Cone Recheado</Text>
                            <Text style={styles.paragraph}>
                            Cupcake fofinho e delicioso
                            </Text>
                        </View>
                        </View>

                        <View style={styles.row}>
                        <View style={styles.column}>
                            <Image source={require('../../asset/gl.jpeg')} style={styles.image} />
                            <Text style={styles.header}>Brownie</Text>
                            <Text style={styles.paragraph}>
                            Brownie irresistível! 
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Image source={require('../../asset/ck.jpeg')} style={styles.image} />
                            <Text style={styles.header}>cupcake</Text>
                            <Text style={styles.paragraph}>
                            Cupcake fofinho e delicioso
                            </Text>
                        </View>
                        </View>

                
    

                {/* Repita para outros jogos conforme necessário */}

            </ScrollView>
        </ImageBackground>
    );
}
