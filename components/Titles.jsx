import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Title1 = props => {
  return <Text style={styles.title1}>{props.title}</Text>;
};

export const Title2 = props => {
  return <Text style={[styles.title1, styles.title2]}>{props.title}</Text>;
};

export const Title3 = props => {
  return <Text style={[styles.title1, styles.title3]}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  title1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#333333',
  },
  title2: {
    fontSize: 20,
  },
  title3: {
    fontSize: 16,
  },
});
