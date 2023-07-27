import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonFloat = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.btn}>
        <Text style={styles.text}>Buy tickets</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFloat;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FF5D57',
    height: 65,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },
});
