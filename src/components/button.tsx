import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Buy tickets</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF5D57',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FCFCFC',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Button;
