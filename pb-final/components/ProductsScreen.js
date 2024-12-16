import React from 'react';
import { TouchableOpacity, View, Text, FlatList, Image, StyleSheet } from 'react-native';
import GoHomeButton from './GoHomeButton';

const categories = [
  { id: '1', title: 'Lanches', image: 'https://cdn.pixabay.com/photo/2024/05/06/17/02/burgers-8743798_640.jpg', products: [
    { id: '1', name: 'X-Burger', price: 'R$15,00', image: 'https://guiadacozinha.com.br/wp-content/uploads/2024/05/x-burguer-tradicional-768x619.jpg' },
    { id: '2', name: 'X-Salada', price: 'R$16,00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIR3aEgtHeqOAwPpNc2j5cgms5Ku5IjveNQ&s' },
    { id: '3', name: 'Hot Dog', price: 'R$12,00', image: 'https://www.receiteria.com.br/wp-content/uploads/hot-dog-classico-capa.jpeg' }
  ]},
  { id: '2', title: 'Bebidas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vIi1mUsBidusiB5wS0gmbcka-HS3e1RPgA&s', products: [
    { id: '4', name: 'Coca-Cola', price: 'R$5,00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ln0L3lk2TJj6gzuVpM8ykWHPyi202_TjHw&s' },
    { id: '5', name: 'Suco de Laranja', price: 'R$6,00', image: 'https://s2-oglobo.glbimg.com/YyUC_KRFzV2nRNd8OVaN2O6iBuo=/0x0:5257x3505/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/o/M/S3B6yZQYOrjtTTBNEMLQ/copo-de-suco-de-laranja-e-uma-pessoa-espremendo-uma-laranja-nele.jpg' },
    { id: '6', name: 'Água Mineral', price: 'R$3,00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWz8TNTvjlsw5uzJ9Jbd0MEH5-2F1HkTBXCg&s' }
  ]},
  { id: '3', title: 'Sobremesas', image: 'https://www.minhareceita.com.br/app/uploads/2022/09/cheesecake-de-morango-portal-minha-receita.jpg', products: [
    { id: '7', name: 'Sorvete de Chocolate', price: 'R$8,00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktOkY1aK0gA-ARJUKhM4P5e6cHkDAVNr93A&s' },
    { id: '8', name: 'Pudim', price: 'R$6,00', image: 'https://www.mococa.com.br/wp-content/uploads/2023/08/img-pudim.jpg' },
    { id: '9', name: 'Bolo de Cenoura', price: 'R$10,00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqid-kzi2UPc0-7Lyx_7Nfu_yY8AvkolERg&s' }
  ]},
];

export default function ProductsScreen({ route }) {
  const { categoryId } = route.params; // Recebendo o categoryId
  const category = categories.find(cat => cat.id === categoryId); // Buscando a categoria com o ID

  if (!category) {
    return <Text>Categoria não encontrada!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.products} // Exibindo apenas os produtos da categoria
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <GoHomeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  cardTitle: {
    marginLeft: 10,
    fontSize: 18,
  },
  cardPrice: {
    marginLeft: 10,
    fontSize: 16,
    color: '#888',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
