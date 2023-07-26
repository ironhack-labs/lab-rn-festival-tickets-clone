import {View, Text, Image} from 'react-native';
import React from 'react';
import Date from '../../icons/Date';
import MapPin from '../../icons/MapPin';
import {bodyStyles} from '../theme/Body.styles';

const Body = () => {
  return (
    <View style={bodyStyles.container}>
      <Text style={bodyStyles.priceText}>$300</Text>
      <Text style={bodyStyles.title}>
        Binational Vs UTC | Opening 2020 - Date 4
      </Text>
      <View style={bodyStyles.infoContainer}>
        <View style={bodyStyles.icon}>
          <Date />
        </View>
        <Text style={bodyStyles.text}>Saturday December 24 {'\n'}8:00 pm</Text>
      </View>
      <View style={bodyStyles.locationContainer}>
        <View style={bodyStyles.icon}>
          <MapPin />
        </View>
        <Text style={bodyStyles.text}>Alberto Gallardo Rimac 2304</Text>
      </View>
      <View style={bodyStyles.locationContainer}>
        <View style={bodyStyles.icon}>
          <Image
            source={require('../../images/Ellipse1.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={bodyStyles.organizer}>Organizer SAC.</Text>
      </View>
      <Text style={bodyStyles.info}>
        This Friday will be a historic day for our region, and you have to be
        present. In the duel for date 4 of League 1, against UTC, we will
        inaugurate the lights of the Guillermo Briceño Rosamedina stadium,
        thanks to the excellent management of our board of directors.
      </Text>
      <Text style={bodyStyles.loadMore}>Ver más</Text>
    </View>
  );
};

export default Body;
