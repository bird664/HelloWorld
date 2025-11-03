import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Exercise8Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <FontAwesome
          name="user-circle"
          size={150}
          color="#4A90E2"
          style={styles.avatar}
        />
      </View>
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
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 0,
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