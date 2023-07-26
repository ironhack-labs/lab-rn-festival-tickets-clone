import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Prices = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.poppinsFont]}>Prices</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  poppinsFont: {
    fontFamily: 'Poppins-Regular',
  },
});

export default Prices;
