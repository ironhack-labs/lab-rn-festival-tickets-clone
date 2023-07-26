import {Text, View} from 'react-native';
import React from 'react';

import Date from '../../../../icons/Date';
import {formatDateLong, formatDateTime} from '../../../utils';
import {eventDateStyles} from './event-date.styles';
import {EventInfoContainer} from '../event-info-container';

type EventDateProps = {date: string};

export const EventDate = ({date}: EventDateProps) => {
  return (
    <EventInfoContainer>
      <Date style={eventDateStyles.icon} />
      <View style={eventDateStyles.content}>
        <Text style={eventDateStyles.date}>{formatDateLong(date)}</Text>
        <Text style={eventDateStyles.date}>{formatDateTime(date)}</Text>
      </View>
    </EventInfoContainer>
  );
};
