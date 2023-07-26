import {Text} from 'react-native';
import React from 'react';

import {eventPlaceStyles} from './event-place.styles';

import MapPin from '../../../../icons/MapPin';
import {EventInfoContainer} from '../event-info-container';

type EventPlaceProps = {place: string};

export const EventPlace = ({place}: EventPlaceProps) => {
  return (
    <EventInfoContainer>
      <MapPin />
      <Text style={eventPlaceStyles.place}>{place}</Text>
    </EventInfoContainer>
  );
};
