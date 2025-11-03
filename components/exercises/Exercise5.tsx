import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Exercise5() {
  const [math, setMath] = useState('');
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [average, setAverage] = useState<number | null>(null);

  const calculateAverage = () => {
    const mathScore = parseFloat(math);
    const physicsScore = parseFloat(physics);
    const chemistryScore = parseFloat(chemistry);

    if (!isNaN(mathScore) && !isNaN(physicsScore) && !isNaN(chemistryScore)) {
      const avg = (mathScore + physicsScore + chemistryScore) / 3;
      setAverage(Math.round(avg * 100) / 100);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Điểm Toán"
        keyboardType="numeric"
        value={math}
        onChangeText={setMath}
      />
      <TextInput
        style={styles.input}
        placeholder="Điểm Lý"
        keyboardType="numeric"
        value={physics}
        onChangeText={setPhysics}
      />
      <TextInput
        style={styles.input}
        placeholder="Điểm Hóa"
        keyboardType="numeric"
        value={chemistry}
        onChangeText={setChemistry}
      />
      <TouchableOpacity style={styles.button} onPress={calculateAverage}>
        <Text style={styles.buttonText}>Tính điểm</Text>
      </TouchableOpacity>
      {average !== null && (
        <Text style={styles.result}>Điểm trung bình: {average}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});