import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Title1 = props => {
  return <Text style={styles.title1}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  title1: {
    fontFamily: 'Poppins',
    fontSize: 24,
    color: '#333333',
    fontWeight: 'bold',
  },
});
