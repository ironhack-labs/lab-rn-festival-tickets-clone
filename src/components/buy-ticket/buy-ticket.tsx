import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {buyTicketStyles} from './buy-ticket.styles';

export const BuyTicket = () => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={buyTicketStyles.button}>
        <Text style={buyTicketStyles.text}>Buy tickets</Text>
      </View>
    </TouchableOpacity>
  );
};
