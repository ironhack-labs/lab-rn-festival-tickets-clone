import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BuyButton = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.button}>
        <Text style={styles.label}>Buy tickets</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#FF5D57',
  },
  label: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default BuyButton;
