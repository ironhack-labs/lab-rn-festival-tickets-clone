import { HStack } from 'native-base';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Date from '../../../icons/Date';
import SvgComponent from '../../../icons/MapPin';
import Carousel from '../carousel/carousel';

const Information = (): JSX.Element => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.informationContainer}>
        <Text style={styles.price}>$300</Text>
        <Text style={styles.title}>
          Binational Vs UTC | Opening 2020 - Date 4
        </Text>
        <HStack space={3} alignItems={'center'}>
          <Date />
          <Text style={styles.textInfo}>Saturday December 24</Text>
        </HStack>
        <Text style={styles.hour}>8:00 pm</Text>
        <HStack space={3} alignItems={'center'}>
          <SvgComponent />
          <Text style={styles.textInfo}>Alberto Gallardo Rimac 2304</Text>
        </HStack>
        <HStack space={3} alignItems={'center'} style={styles.mt16}>
          <Image source={require('../../../images/user.png')} />
          <Text style={styles.organizer}>Organizer SAC.</Text>
        </HStack>
        <Text style={styles.paragraph}>
          This Friday will be a historic day for our region, and you have to be
          present. In the duel for date 4 of League 1, against UTC, we will
          inaugurate the lights of the Guillermo Briceño Rosamedina stadium,
          thanks to the excellent management of our board of directors.
        </Text>
      </View>
      <Image style={styles.map} source={require('../../../images/map.png')} />
      <Carousel />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  informationContainer: {
    paddingHorizontal: 16,
  },
  price: {
    color: '#6ABDA6',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 8,
    marginTop: 10,
  },
  title: {
    color: '#333333',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    marginBottom: 16,
    width: 328,
  },
  textInfo: {
    color: '#828282',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
  },
  hour: {
    color: '#828282',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    marginLeft: 28,
    marginBottom: 16,
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  organizer: {
    color: '#333333',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16,
  },
  paragraph: {
    color: '#4F4F4F',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    marginTop: 16,
    marginBottom: 35,
  },
  map: {
    width: '100%',
    marginBottom: 27,
  },
});

export default Information;
