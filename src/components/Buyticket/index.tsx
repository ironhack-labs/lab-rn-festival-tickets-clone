import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const BuyTicket = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.button}>
        <Text style={styles.text}>Buy tickets</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BuyTicket;
