import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

export const PurchaseTicketsBtn = () => {
  return (
    <View style={{backgroundColor: '#FF5D57'}}>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: "#FCFCFC", paddingHorizontal: 57, paddingVertical: 14}}>Buy Tickets</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};