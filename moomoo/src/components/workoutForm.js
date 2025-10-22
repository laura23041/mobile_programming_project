import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function WorkoutForm({ onAddWorkout }) {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [calories, setCalories] = useState('');

  const handleAdd = () => {
    if (!type || !duration) return;

    const newWorkout = {
      type,
      duration: parseInt(duration),
      distance: parseFloat(distance) || 0,
      calories: parseFloat(calories) || 0,
      date: new Date().toISOString(),
    };

    // kutsutaan WorkoutsScreenistä saatua funktiota
    onAddWorkout(newWorkout);

    // tyhjennetään lomake
    setType('');
    setDuration('');
    setDistance('');
    setCalories('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Workout type"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (min)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />
      <TextInput
        style={styles.input}
        placeholder="Distance (km)"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />
      <TextInput
        style={styles.input}
        placeholder="Calories"
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
      />
      <Button title="Add Workout" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});
