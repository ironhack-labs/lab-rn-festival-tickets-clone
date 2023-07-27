import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextP = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default TextP;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 25,
    fontFamily: 'Roboto',
    textAlign: 'justify',
  },
});
