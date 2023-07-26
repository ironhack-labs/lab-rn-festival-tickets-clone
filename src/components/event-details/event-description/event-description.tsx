import {Text} from 'react-native';
import React, {ReactNode} from 'react';

import {eventDescriptionStyles} from './event-description.styles';
import {EventInfoContainer} from '../event-info-container';

type EventDescriptionProps = {children: ReactNode};

export const EventDescription = ({children}: EventDescriptionProps) => {
  return (
    <EventInfoContainer>
      <Text style={eventDescriptionStyles.text}>{children}</Text>
    </EventInfoContainer>
  );
};
