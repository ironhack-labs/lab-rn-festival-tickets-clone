import {View} from 'react-native';
import React, {ReactNode} from 'react';

import {eventInfoContainerStyles} from './event-info-container.styles';

type EventInfoContainerProps = {children: ReactNode};

export const EventInfoContainer = ({children}: EventInfoContainerProps) => {
  return <View style={eventInfoContainerStyles.container}>{children}</View>;
};
