import React from 'react';
import {TouchableOpacity, Alert, Text, StyleSheet} from 'react-native';

const FixedBottomBtn = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => Alert.alert('Ticket reserved')}>
      <Text style={{color: '#FFFFFF'}}>Buy Tickets</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FF5D57',
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
});

export default FixedBottomBtn;
