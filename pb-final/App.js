import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ProductsScreen from './components/ProductsScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen';
import OrdersScreen from './components/OrdersScreen';
import SettingsScreen from './components/SettingsScreen';
import MapScreen from './components/MapScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="App">
          {(props) => <AppNavigator {...props} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        </Stack.Screen>
        <Stack.Screen name="Produtos" component={ProductsScreen} />
        <Stack.Screen name="Carrinho" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppNavigator({ isDarkMode, toggleTheme }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          } else if (route.name === 'Pedidos') {
            iconName = 'clipboard';
          } else if (route.name === 'Mapa') {
            iconName = 'map';
          } else if (route.name === 'Configurações') {
            iconName = 'settings';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} initialParams={{ isDarkMode, toggleTheme }} />
      <Tab.Screen name="Perfil" component={ProfileScreen} initialParams={{ isDarkMode, toggleTheme }} />
      <Tab.Screen name="Pedidos" component={OrdersScreen} initialParams={{ isDarkMode, toggleTheme }} />
      <Tab.Screen name="Mapa" component={MapScreen} initialParams={{ isDarkMode, toggleTheme }} />
      <Tab.Screen name="Configurações" component={SettingsScreen} initialParams={{ isDarkMode, toggleTheme }} />
    </Tab.Navigator>
  );
}
