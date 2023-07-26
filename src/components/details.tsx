import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Date from '../../icons/date';
import Map from '../../icons/map-pin';

function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>$300</Text>
      <Text style={styles.title}>
        Binational Vs UTC | Opening 2020 - Date 4
      </Text>

      <View style={styles.iconContainer}>
        <Date width={16} height={16} />
        <Text style={styles.textIcon}>Saturday December 24</Text>
      </View>

      <Text style={[styles.textIcon, styles.hour]}>8:00 pm</Text>

      <View style={styles.iconContainer}>
        <Map width={16} height={16} />
        <Text style={styles.textIcon}>Alberto Gallardo Rimac 2304</Text>
      </View>

      <View style={styles.iconContainer}>
        <Image source={require('../../images/ellipsis.png')} />
        <Text style={[styles.textIcon, styles.organizerTextIcon]}>
          Organizer SAC.
        </Text>
      </View>

      <Text style={styles.description}>
        This Friday will be a historic day for our region, and you have to be
        present. In the duel for date 4 of League 1, against UTC, we will
        inaugurate the lights of the Guillermo Briceño Rosamedina stadium,
        thanks to the excellent management of our board of directors.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 9,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  textIcon: {
    paddingLeft: 16,
    color: '#828282',
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    color: '#6ABDA6',
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 8,
  },
  hour: {
    marginLeft: 16,
  },
  organizerTextIcon: {
    fontWeight: '700',
    color: '#333',
  },
  description: {
    color: '#4F4F4F',
    textAlign: 'justify',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 25,
  },
});

export default Details;
