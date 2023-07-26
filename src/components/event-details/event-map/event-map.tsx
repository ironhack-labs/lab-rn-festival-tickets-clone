import {Image} from 'react-native';
import React from 'react';

import {eventMapStyles} from './event-map.styles';

// NOTE: without functionality, it should recieve de coors and renders de map
export const EventMap = () => {
  return (
    <Image
      style={eventMapStyles.map}
      source={require('../../../../images/map.png')}
    />
  );
};
