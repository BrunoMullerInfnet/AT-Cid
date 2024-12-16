import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GoHomeButton from './GoHomeButton';

const orders = [
  { id: '1', items: ['X-Burger', 'Refrigerante'], total: 20 },
  { id: '2', items: ['Sorvete'], total: 10 },
];

export default function OrdersScreen({ route }) {
  const { isDarkMode } = route.params || false;

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Pedidos</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, isDarkMode && styles.darkCard]}>
            <Text style={[styles.text, isDarkMode && styles.darkText]}>
              Itens: {item.items.join(', ')}
            </Text>
            <Text style={[styles.text, isDarkMode && styles.darkText]}>
              Total: R${item.total}
            </Text>
          </View>
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
    backgroundColor: '#f8f9fa',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  darkText: {
    color: 'white',
  },
  card: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  darkCard: {
    backgroundColor: '#555',
  },
  text: {
    fontSize: 18,
    color: '#343a40',
  },
});
