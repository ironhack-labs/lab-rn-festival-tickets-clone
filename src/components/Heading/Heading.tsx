import React from 'react'
import { Image, View } from 'react-native';

export const Heading = () => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <Image source={require('../../../images/heading.png')} style={{width: '100%', resizeMode: 'stretch'}}/>
    </View>
  )
};