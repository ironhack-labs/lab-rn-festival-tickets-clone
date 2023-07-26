import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Date from '../../icons/Date';
import SvgComponent from '../../icons/MapPin';

export const DetailsCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>$300</Text>
      <Text style={styles.title}>
        Binational Vs UTC | Opening 2020 - Date 4
      </Text>

      <View style={styles.details}>
        <View style={styles.row}>
          <Date />
          <Text style={styles.label}>Sábado 24 de diciembre {'\n'}8:00 pm</Text>
        </View>
        <View style={styles.row}>
          <SvgComponent />
          <Text style={styles.label}>Alberto Gallardo Rimac 2304</Text>
        </View>
        <View style={styles.row}>
          <Image source={require('../../images/Ellipse1.png')} />
          <Text style={styles.feature}>Organizer SAC.</Text>
        </View>
      </View>

      <View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo
          ante, congue sed fermentum quis, faucibus eu mauris. Sed odio enim,
          ornare vitae scelerisque eu, maximus vitae ligula. Nam ut lacus vel
          felis faucibus tincidunt. Sed magna sapien, tincidunt sit amet ex
          quis, imperdiet finibus nibh. Aliquam sollicitudin massa vel
          consectetur feugiat. Praesent tincidunt rutrum elementum. Mauris
          pellentesque venenatis ante sodales bibendum. Pellentesque eu lobortis
          neque. Vivamus hendrerit orci justo, posuere molestie eros consequat
          ut. Aenean tincidunt neque at tellus aliquet, eget laoreet tellus
          egestas.
        </Text>
      </View>
      <View>
        <Image source={require('../../images/map.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#333333',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
  },
  price: {
    color: '#6ABDA6',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28.4,
  },
  details: {
    marginVertical: 16,
  },
  label: {
    color: '#828282',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 16,
  },
  feature: {
    color: '#333333',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 16,
  },
  description: {
    color: '#4F4F4F',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 25,
    textAlign: 'justify',
  },
});
