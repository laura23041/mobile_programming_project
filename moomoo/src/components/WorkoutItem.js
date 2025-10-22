import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkoutItem({ title, duration }) {
  return (
    <View style={styles.item}>
      <Text>{title} - {duration} min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { 
    padding: 10, 
    borderBottomWidth: 1, 
    borderColor: '#ccc' },
});
