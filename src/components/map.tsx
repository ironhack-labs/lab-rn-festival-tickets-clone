import React from 'react';
import { Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

function Map() {
  return <Image style={{ width }} source={require('../../images/map.png')} />;
}

export default Map;
