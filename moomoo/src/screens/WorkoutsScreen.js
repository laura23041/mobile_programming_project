import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { createTables, getWorkouts, addWorkout, deleteWorkout } from '../services/database';

export default function WorkoutsScreen() {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    createTables(); // luo taulu
    loadWorkouts(); // lataa tiedot aluksi
  }, []);

  const loadWorkouts = () => {
    getWorkouts(setWorkouts);
  };

  const handleAddWorkout = () => {
    if (!title || !duration) return;
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    addWorkout(title, Number(duration), date, () => {
      setTitle('');
      setDuration('');
      loadWorkouts();
    });
  };

  const handleDeleteWorkout = (id) => {
    deleteWorkout(id, loadWorkouts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Workouts</Text>

      <TextInput
        style={styles.input}
        placeholder="Workout name"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Duration (min)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      <Button title="Add Workout" onPress={handleAddWorkout} />

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title} - {item.duration} min ({item.date})</Text>
            <Button title="Delete" onPress={() => handleDeleteWorkout(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5, marginVertical: 5 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd', marginTop: 5 },
});
