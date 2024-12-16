import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Switch } from 'react-native';
import { Appearance } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

  const handleLogin = () => {
    if (email && password) {
      if (email.includes('exemplinho@gmail.com')) {
        if (password.length >= 4) {
          navigation.replace('App');
        } else {
          Alert.alert('Erro', 'A senha deve ter pelo menos 4 caracteres!');
        }
      } else {
        Alert.alert('Erro', 'Por favor, insira um e-mail válido!');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>InfnetFood</Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, isDarkMode && styles.darkText]}>Modo Escuro</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
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
    textAlign: 'center',
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  darkInput: {
    borderColor: '#555',
    backgroundColor: '#666',
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
