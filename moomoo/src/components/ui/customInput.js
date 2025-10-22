import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CustomInput({ ...props }) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
  },
});
