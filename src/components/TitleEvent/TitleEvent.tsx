import React from 'react'
import { Text, View } from 'react-native';

export const TitleEvent = () => {
  return (
    <View style={{paddingVertical: 8, paddingHorizontal: 16}}>
      <Text style={{fontSize: 24, fontWeight: "700", lineHeight: 36, fontFamily: 'Poppins'}}>
        Binacional Vs UTC |
      </Text>
      <Text style={{fontSize: 24, fontWeight: "700", lineHeight: 36, fontFamily: 'Poppins'}}>
        Apertura 2020 - Fecha 4
      </Text>
    </View>
  )
};