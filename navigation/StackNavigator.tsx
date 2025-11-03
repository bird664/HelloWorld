import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Exercise8Home from '../components/exercises/Exercise8Home';
import Exercise8Profile from '../components/exercises/Exercise8Profile';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Exercise8Home} />
      <Stack.Screen name="Profile" component={Exercise8Profile} />
    </Stack.Navigator>
  );
}