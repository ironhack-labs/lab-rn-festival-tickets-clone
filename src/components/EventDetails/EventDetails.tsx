import React from 'react'
import { Image, Text, View } from 'react-native';
import SvgComponent from '../../../icons/MapPin';
import Date from '../../../icons/Date';

export const EventDetails = () => {
  return (
    <View>
      <View style={{paddingVertical: 8, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center'}}>
        <Date />
        <Text style={{marginLeft: 16, fontSize: 14, fontWeight: "500", color:'#828282', fontFamily: 'Poppins'}}>Saturday December 24</Text>
      </View>
      <View style={{paddingVertical: 8, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center'}}>
        <SvgComponent />
        <Text style={{marginLeft: 16, fontSize: 14, fontWeight: "500", color:'#828282', fontFamily: 'Poppins'}}>Alberto Gallardo Rimac 2304</Text>
      </View>
      <View style={{paddingVertical: 8, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../../../images/Ellipse1.png')}/>
        <Text style={{color: '#333333', marginLeft: 16, fontSize: 14, fontWeight: "700", lineHeight: 21, fontFamily: 'Poppins'}}>Organizer SAC.</Text>
      </View>
      <View style={{paddingVertical: 8, paddingHorizontal: 16}}>
        <Text style={{fontWeight: "400", fontSize: 14, lineHeight: 25, textAlign: 'justify', fontFamily: 'Roboto'}}>
          This Friday will be a historic day for our region, and you have to be present. In the duel for date 4 of League 1, against UTC, we will inaugurate the lights of the Guillermo Briceño Rosamedina stadium, thanks to the excellent management of our board of directors.
        </Text>
      </View>
    </View>
  )
};