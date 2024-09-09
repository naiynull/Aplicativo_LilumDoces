import React from 'react';
import { ImageBackground, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { InformacoesTypes } from "../../navigations/informacoes.navigation";
import {styles} from './styled'; // Certifique-se de que o caminho esteja correto

export function Informacoes({ navigation }: InformacoesTypes) {
    const Fundo = require('../../asset/img 4.png');
    
    return (
        <ImageBackground source={Fundo} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.section}>
                    <Text style={styles.title}>Nossos Doces Irresistíveis</Text>
                    <Text style={styles.subtitle}>Uma Experiência Doce</Text>
                    <Text style={styles.description}>Descubra nossa seleção especial de doces feitos com carinho e qualidade.</Text>
                
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Cookie")}>
                            <Image source={require('../../asset/copoF.jpg')} style={styles.image} />
                            <Text style={styles.itemTitle}>Cookies</Text>
                            
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Brigadeiro")}>
                            <Image source={require('../../asset/bg.jpg')} style={styles.image} />
                            <Text style={styles.itemTitle}>Brigadeiro</Text>
                           
                        </TouchableOpacity>
                    </View>
                
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Brownie")}>
                            <Image source={require('../../asset/gl.jpeg')} style={styles.image} />
                            <Text style={styles.itemTitle}>Brownie</Text>
                           
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Cupcake")}>
                            <Image source={require('../../asset/ck.jpeg')} style={styles.image} />
                            <Text style={styles.itemTitle}>Cupcake</Text>
                           
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Donuts")}>
                            <Image source={require('../../asset/donuts.jpg')} style={styles.image} />
                            <Text style={styles.itemTitle}>Donuts</Text>
                          
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("ConeRecheado")}>
                            <Image source={require('../../asset/Cone.jpg')} style={styles.image} />
                            <Text style={styles.itemTitle}>Cone Recheado</Text>
                           
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Biscoito")}>
                            <Image source={require('../../asset/capu.jpeg')} style={styles.image} />
                            <Text style={styles.itemTitle}>Biscoito</Text>
                            
                        </TouchableOpacity>
                        
                        <View style={styles.item}>
                            <Image source={require('../../asset/ck.jpeg')} style={styles.image} />
                            <Text style={styles.itemTitle}>Cupcake</Text>
                            
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
