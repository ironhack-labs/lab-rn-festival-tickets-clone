import {Text} from 'react-native';
import React from 'react';

import {eventPriceStyles} from './event-price.styles';
import {EventInfoContainer} from '../event-info-container';

type EventPriceProps = {price: string};

export const EventPrice = ({price}: EventPriceProps) => {
  return (
    <EventInfoContainer>
      <Text style={eventPriceStyles.text}>{price}</Text>
    </EventInfoContainer>
  );
};
