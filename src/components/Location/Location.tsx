import React from 'react'
import { Image, View } from 'react-native';

export const Location = () => {
  return (
    <View>
      <Image source={require('../../../images/map.png')} style={{width: '100%', resizeMode: 'stretch'}}/>
    </View>
  )
};