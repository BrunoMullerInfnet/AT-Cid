// ProfileScreen.js
import { View, Text, StyleSheet } from 'react-native';
import GoHomeButton from './GoHomeButton';

export default function ProfileScreen({ route }) {
  const { isDarkMode } = route.params || false;
  const user = { name: 'James Baxter', email: 'exemplinho@gmail.com' };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Perfil</Text>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>Nome: {user.name}</Text>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>E-mail: {user.email}</Text>
      <GoHomeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  darkText: {
    color: 'white',
  },
});
