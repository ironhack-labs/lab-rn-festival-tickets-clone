import {Text} from 'react-native';
import React from 'react';

import {eventTitleStyles} from './event-title.styles';
import {EventInfoContainer} from '../event-info-container';

type EventTitleProps = {title: string};

export const EventTitle = ({title}: EventTitleProps) => {
  return (
    <EventInfoContainer>
      <Text style={eventTitleStyles.text}>{title}</Text>
    </EventInfoContainer>
  );
};
