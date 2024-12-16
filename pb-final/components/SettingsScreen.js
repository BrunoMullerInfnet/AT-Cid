import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function SettingsScreen({ navigation, route }) {
  const { isDarkMode, toggleTheme } = route.params;

  const handleToggleTheme = () => {
    const newTheme = !isDarkMode; 
    toggleTheme(); 
    navigation.navigate('Home', { isDarkMode: newTheme });
    navigation.navigate('Perfil', { isDarkMode: newTheme });
    navigation.navigate('Pedidos', { isDarkMode: newTheme });
    navigation.navigate('Mapa', { isDarkMode: newTheme });
    navigation.navigate('Configurações', { isDarkMode: newTheme });

  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Configurações</Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, isDarkMode && styles.darkText]}>Modo Escuro</Text>
        <Switch value={isDarkMode} onValueChange={handleToggleTheme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkText: {
    color: 'white',
  },
  switchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchText: {
    color: 'black',
  },
});
