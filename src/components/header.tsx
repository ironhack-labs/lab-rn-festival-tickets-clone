import React from 'react';
import { Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

function Header() {
  const source = require('../../images/heading.png');
  return <Image style={{ width }} source={source} />;
}

export default Header;
