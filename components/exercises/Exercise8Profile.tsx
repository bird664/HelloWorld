import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Exercise8Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.info}>React Native Developer</Text>
      <Text style={styles.info}>john.doe@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});