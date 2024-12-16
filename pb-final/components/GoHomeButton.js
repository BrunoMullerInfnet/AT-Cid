import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoHomeButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('App', { screen: 'Home' })} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
});
