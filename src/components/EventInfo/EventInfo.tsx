import React from 'react'
import { Image, Text, View } from 'react-native';
import Heart from '../../../icons/Heart';

export const EventInfo = () => {
  return (
    <>
      <View style={{marginTop: 27, paddingHorizontal: 16}}>
        <Text style={{fontWeight: "700", fontSize: 20, lineHeight: 25, color: '#273431', marginBottom: 16}}>Similar Events</Text>
        <Image source={require('../../../images/first-card.png')}/>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: "700", fontSize: 20, lineHeight: 25, color: '#273431', marginRight: 50}}>PEPE Y TEO - STAND UP</Text>
          <Heart />
        </View>
      </View>
      <View style={{marginTop: 27, paddingHorizontal: 16, flexDirection: 'row'}}>
        <Text style={{fontWeight: "400", fontSize: 12, lineHeight: 18, color: '#273431', marginRight: 120 ,fontFamily: 'Poppins'}}>Thursday June 11 | 9:00 PM</Text>
        <Text style={{fontWeight: "400", fontSize: 12, lineHeight: 18, color: '#273431'}}>$300</Text>
      </View>
    </>
  )
};