
// Tuodaan tarvittavat komponentit ja kirjastot
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    // Tekstielementit näkyvät View:n sisällä
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SportsTracker 🏋️</Text>
      <Text style={styles.subtitle}>Track your workouts easily!</Text>
    </View>
  );
}

// Tyylit määritellään StyleSheetillä 
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff' },

  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10 },

  subtitle: { 
    fontSize: 16, 
    color: '#555' },
});
