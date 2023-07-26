import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {SimilarEventCard} from './similiar-event-card';
import {SimilarEventCarrousel} from './similiar-event-carrousel';
import {SimilarEventTitle} from './similiar-event-title';

export const SimilarEvents = ({children}: {children: ReactNode}) => {
  return <View>{children}</View>;
};

SimilarEvents.Card = SimilarEventCard;
SimilarEvents.Carrousel = SimilarEventCarrousel;
SimilarEvents.Title = SimilarEventTitle;
