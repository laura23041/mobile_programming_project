import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddWorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Workout Screen - coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 16, color: '#555' },
});
