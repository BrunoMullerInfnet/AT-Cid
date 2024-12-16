import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CartScreen({ route }) {
  const [cart, setCart] = useState([
    { id: '1', name: 'X-Burger', quantity: 2, price: 15 },
    { id: '2', name: 'Refrigerante', quantity: 1, price: 5 },
  ]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  const { isDarkMode } = route.params || { isDarkMode: false };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Carrinho</Text>
      {cart.map((item) => (
        <Text key={item.id} style={[styles.item, isDarkMode && styles.darkText]}>
          {item.name} x{item.quantity} - R${item.price * item.quantity}
        </Text>
      ))}
      <Text style={[styles.total, isDarkMode && styles.darkText]}>
        Total: R${total}
      </Text>
      <Button title="Finalizar Compra" onPress={() => alert('Compra finalizada!')} />
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
  item: {
    fontSize: 18,
    marginBottom: 10,
    color: '#343a40',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#343a40',
  },
});
