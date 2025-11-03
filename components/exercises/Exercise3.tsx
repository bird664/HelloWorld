import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Exercise3() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/react-native-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Hello React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});