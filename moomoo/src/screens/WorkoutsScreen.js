import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import WorkoutForm from '../components/workoutForm';
import { getWorkouts, addWorkout, deleteWorkout } from '../services/database';

export default function WorkoutsScreen() {
  const [workouts, setWorkouts] = useState([]);

  const loadWorkouts = () => {
    getWorkouts((data) => {
      setWorkouts(data);
    });
  };

  const handleAddWorkout = (newWorkout) => {
    addWorkout(newWorkout, () => {
      loadWorkouts();
    });
  };

  const handleDeleteWorkout = (id) => {
    deleteWorkout(id, () => {
      loadWorkouts();
    });
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <WorkoutForm onAddWorkout={handleAddWorkout} />

      <Text style={styles.header}>Saved Workouts</Text>
      {workouts.length === 0 ? (
        <Text style={styles.empty}>No workouts saved yet.</Text>
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.type}>{item.type}</Text>
                <Text>{item.duration} min</Text>
                <Text>{item.distance} km</Text>
                <Text>{item.calories} kcal</Text>
                <Text>{item.date}</Text>
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteWorkout(item.id)}
              >
                <Text style={styles.deleteText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F6F6F6',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  deleteButton: {
    padding: 5,
  },
  deleteText: {
    fontSize: 20,
    color: '#FF4444',
  },
  empty: {
    marginTop: 15,
    color: '#888',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
