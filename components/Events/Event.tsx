import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Heart from '../../icons/Heart';
import {EventProps} from '../../interfaces/events';
import {Title3} from '../Titles';

const Event = ({data}: EventProps) => {
  return (
    <View style={[styles.container]}>
      <Image source={data.image} />
      <View style={[styles.rowSpaceBetween, styles.containerTitle]}>
        <Text style={styles.title}>{data.title}</Text>
        <Heart />
      </View>
      <View style={styles.rowSpaceBetween}>
        <Text style={styles.date}>{data.date}</Text>
        <Title3 title={`$${data.price}`} />
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  container: {
    marginEnd: 16,
  },
  title: {
    fontSize: 14,
    color: '#273431',
    lineHeight: 21,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTitle: {
    marginTop: 8,
    height: 42,
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
  },
});
