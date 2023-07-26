import {Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {eventOrganizerStyles} from './event-organizer.styles';
import {EventInfoContainer} from '../event-info-container';

type EventOrganizerProps = {organizer: string; thumbnail: ImageSourcePropType};

export const EventOrganizer = ({organizer, thumbnail}: EventOrganizerProps) => {
  return (
    <EventInfoContainer>
      <Image source={thumbnail} />
      <Text style={eventOrganizerStyles.organizer}>{organizer}</Text>
    </EventInfoContainer>
  );
};
