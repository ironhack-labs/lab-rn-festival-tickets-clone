import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BuyButtonProps {
  text: string;
}

const BuyButton = ({ text }: BuyButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 25,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF5D57',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingHorizontal: 70,
  },
});

export default BuyButton;
