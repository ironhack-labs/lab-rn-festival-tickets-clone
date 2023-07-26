import React from 'react';
import {Image} from 'react-native';
import {bannerStyles} from './banner.styles';

export const Banner = () => {
  return (
    <Image
      style={bannerStyles.banner}
      source={require('../../../images/heading.png')}
    />
  );
};
