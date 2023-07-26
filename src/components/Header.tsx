import {View, Image} from 'react-native';
import React from 'react';
import {headerStyles} from '../theme/Header.styles';

export const Header = () => {
  return (
    <View>
      <Image
        source={require('../../images/heading.png')}
        resizeMode="contain"
        style={headerStyles.image}
      />
    </View>
  );
};
