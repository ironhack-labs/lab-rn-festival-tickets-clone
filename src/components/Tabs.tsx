import {View, Text} from 'react-native';
import React from 'react';
import {headerStyles} from '../theme/Header.styles';

export const Tabs = () => {
  return (
    <View style={headerStyles.tabsContainer}>
      <View style={headerStyles.infoContainer}>
        <Text style={headerStyles.infoTab}>Info</Text>
      </View>
      <Text style={headerStyles.priceTab}>Prices</Text>
    </View>
  );
};
