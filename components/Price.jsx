import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Price = props => {
  return (
    <View>
      <Text style={styles.textPrice}>${props.value}</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  textPrice: {
    fontFamily: 'Poppins',
    color: '#6ABDA6',
    fontSize: 20,
    fontWeight: '700',
  },
});
