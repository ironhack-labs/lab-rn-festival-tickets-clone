import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Banner = () => {
  return (
    <View>
      <Image source={require('../images/heading.png')} style={styles.banner} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    width: '100%',
  },
});
