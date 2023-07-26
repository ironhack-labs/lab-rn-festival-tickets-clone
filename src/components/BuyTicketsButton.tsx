import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BuyTicketsButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Text style={styles.buttonText}>Buy tickets</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5D57',
    padding: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: '#FCFCFC',
  },
});

export default BuyTicketsButton;
