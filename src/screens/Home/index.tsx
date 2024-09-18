import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, ImageSourcePropType } from 'react-native';
import { MenuTabTypes } from '../../navigations/MenuBottomtab.navigation';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styled'; // Importando os estilos
import { colors } from '../../styles/colors'; // Arquivo de cores, se existir

// Tipos dos dados para os bolos
type Cake = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  price: string;
  rating: number;
  description: string;
};

export function Home({ navigation }: MenuTabTypes) {
  // Dados estáticos para o exemplo
  const ordersInProgress: Cake[] = [
    {
      id: '1',
      name: 'Pink birthday cake',
      image: require('../../asset/browien.webp'), // Correto uso de require
      price: '$100',
      rating: 4.6,
      description: 'Celebrate your special occasion with our delicious birthday cake!',
    },
  ];

  const popularCakes: Cake[] = [
    {
      id: '2',
      name: 'Chocolate cake with red berries',
      image: require('../../asset/bist.jpg'), // Correto uso de require
      price: '$70',
      rating: 5.0,
      description: 'Rich chocolate cake topped with fresh red berries.',
    },
    {
      id: '3',
      name: 'Vanilla cake with red berries',
      image: require('../../asset/cookiepacoca.jpg'), // Correto uso de require
      price: '$59',
      rating: 4.7,
      description: 'Fluffy vanilla cake garnished with fresh berries.',
    },
  ];

  // Renderização do item da lista de bolos
  const renderCakeItem = ({ item }: { item: Cake }) => (
    <TouchableOpacity
      style={styles.cakeItem}
    >
      <Image source={item.image} style={styles.cakeImage} />
      <View style={styles.cakeInfo}>
        <Text style={styles.cakeName}>{item.name}</Text>
        <Text style={styles.cakePrice}>{item.price}</Text>
        <Text style={styles.cakeRating}>⭐ {item.rating.toFixed(1)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to CakeMania!</Text>
      </View>

      {/* Seção "My orders in progress" */}
      <Text style={styles.sectionTitle}>My orders in progress</Text>
      <FlatList
        data={ordersInProgress}
        renderItem={renderCakeItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Seção "Popular" */}
      <Text style={styles.sectionTitle}>Popular</Text>
      <FlatList
        data={popularCakes}
        renderItem={renderCakeItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}
