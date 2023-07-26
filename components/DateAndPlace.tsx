import {Image, StyleSheet, Text, View} from 'react-native';
import Date from '../icons/Date';
import MapPin from '../icons/MapPin';

export const DateAndPlace = () => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <Date />
        <Text style={styles.text}>Saturday December 24</Text>
      </View>
      <View style={[styles.rowContainer, {marginTop: 8}]}>
        <View style={{width: 16, height: 16}} />
        <Text style={styles.text}>8:00 pm</Text>
      </View>
      <View style={styles.rowContainer}>
        <MapPin />
        <Text style={styles.text}>Alberto Gallardo Rimac 2304</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  text: {
    marginLeft: 16,
    color: '#828282',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
  },
});
