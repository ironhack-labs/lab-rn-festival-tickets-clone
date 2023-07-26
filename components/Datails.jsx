import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Date from '../icons/Date';
import SvgComponent from '../icons/MapPin';

const Details = props => {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.containerIcon}>
          <Date />
        </View>
        <View>
          <Text style={styles.text}>{props.date}</Text>
          <Text style={styles.text}>{props.hour}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.containerIcon}>
          <SvgComponent />
        </View>
        <View>
          <Text style={styles.text}>{props.address}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.containerIcon}>
          <Image source={props.imageProfile} />
        </View>
        <View>
          <Text style={[styles.text, styles.textBold]}>{props.organizer}</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  containerIcon: {
    width: 32,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  imageprofile: {
    width: 16,
    height: 16,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    color: '#828282',
    marginBottom: 8,
  },
  textBold: {
    fontWeight: 700,
  },
});
