import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {EventPrice} from './event-price';
import {EventDate} from './event-date';
import {EventTitle} from './event-title';
import {EventPlace} from './event-place';
import {EventOrganizer} from './event-organizer';
import {EventDescription} from './event-description';
import {EventMap} from './event-map';

export const EventDetails = ({children}: {children: ReactNode}) => {
  return <View>{children}</View>;
};

EventDetails.Price = EventPrice;
EventDetails.Title = EventTitle;
EventDetails.Date = EventDate;
EventDetails.Place = EventPlace;
EventDetails.Organizer = EventOrganizer;
EventDetails.Description = EventDescription;
EventDetails.Map = EventMap;
