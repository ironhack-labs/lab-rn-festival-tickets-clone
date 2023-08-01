import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import DateIcon from '../icons/Date';
import MapIcon from '../icons/MapPin';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.poppinsFont, {color: '#6abda6'}]}>
        $300
      </Text>

      <Text
        style={[
          styles.title,
          styles.poppinsFont,
          {color: '#333333', textAlign: 'justify', fontWeight: 'bold'},
        ]}>
        Binational Vs UTC | Opening 2020 - Date 4
      </Text>

      <View style={styles.dateContainer}>
        <DateIcon
          width={16}
          height={16}
          fill="#828282"
          style={styles.dateIcon}
        />
        <View>
          <Text style={[styles.info, styles.poppinsFont]}>
            Saturday December 24
          </Text>
          <Text style={[styles.info, styles.poppinsFont, {marginLeft: 8}]}>
            8:00pm
          </Text>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <MapIcon width={16} height={16} fill="#828282" style={styles.mapIcon} />
        <View style={styles.textContainer}>
          <Text style={[styles.info, styles.poppinsFont]}>
            Alberto Gallardo Rimac 2304
          </Text>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <Image source={require('../images/user.png')} style={styles.mapIcon} />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              styles.poppinsFont,
              {
                color: '#333333',
                fontWeight: 'bold',
                fontSize: 12,
                marginBottom: 12,
              },
            ]}>
            Organizer SAC.
          </Text>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={[styles.info, styles.poppinsFont]}>
          This Friday will be a historic day for our region. and you have to be
          present. In the duel for date 4 of League 1, against UTC, we will
          inaugurate the lights of the Guillermo Briceño Rosamedina stadium.
        </Text>
      </View>
      <View style={styles.dateContainer}>
        <Image
          source={require('../images/map.png')}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  info: {
    fontSize: 12,
    marginBottom: 4,
  },
  mapContainer: {
    flex: 1,
  },
  mapImage: {
    flex: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  dateIcon: {
    marginRight: 8,
  },
  mapIcon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  poppinsFont: {
    fontFamily: 'Poppins-Regular',
  },
});

export default Details;
