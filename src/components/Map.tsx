import {View, Image} from 'react-native';
import React from 'react';
import {headerStyles} from '../theme/Header.styles';

export const Map = () => {
  return (
    <View>
      <Image
        source={require('../../images/map.png')}
        resizeMode="contain"
        style={headerStyles.image}
      />
    </View>
  );
};
