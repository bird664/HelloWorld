import React, { useState } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Exercise3 from './components/exercises/Exercise3';
import Exercise4 from './components/exercises/Exercise4';
import Exercise5 from './components/exercises/Exercise5';
import Exercise6 from './components/exercises/Exercise6';
import Exercise7 from './components/exercises/Exercise7';
import Exercise8 from './navigation/StackNavigator';
import Exercise9 from './navigation/TabNavigator';
import Exercise10 from './components/exercises/Exercise10';

export default function App() {
  const [currentExercise, setCurrentExercise] = useState<number | null>(null);

  const renderExercise = () => {
    switch (currentExercise) {
      case 3:
        return <Exercise3 />;
      case 4:
        return <Exercise4 />;
      case 5:
        return <Exercise5 />;
      case 6:
        return <Exercise6 />;
      case 7:
        return <Exercise7 />;
      case 8:
        return <Exercise8 />;
      case 9:
        return <Exercise9 />;
      case 10:
        return <Exercise10 />;
      default:
        return (
          <ScrollView style={styles.menu}>
            {[3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <TouchableOpacity
                key={num}
                style={styles.menuItem}
                onPress={() => setCurrentExercise(num)}
              >
                <Text style={styles.menuText}>Bài tập {num}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentExercise && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setCurrentExercise(null)}
        >
          <Text style={styles.backButtonText}>Quay lại Menu</Text>
        </TouchableOpacity>
      )}
      {renderExercise()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu: {
    flex: 1,
    padding: 20,
  },
  menuItem: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#ff3b30',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});