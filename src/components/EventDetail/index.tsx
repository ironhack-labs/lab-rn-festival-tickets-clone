import {EventDetailProps} from '../../types';
import {eventDetailStyles} from './styles';
import {View, Text, Image} from 'react-native';
import Date from '../icons/Date';
import InfoWithIcon from './InfoWithIcon';
import MapPin from '../icons/MapPin';
import React, {FC} from 'react';

const EventDetail: FC<EventDetailProps> = ({event, containerStyle}) => {
  return (
    <>
      <View style={[eventDetailStyles.container, containerStyle]}>
        <Text style={eventDetailStyles.eventPriceText}>{event.price}</Text>
        <Text style={eventDetailStyles.eventTitleText}>{event.title}</Text>
        <InfoWithIcon
          icon={<Date />}
          title={event.date}
          subTitle={event.hour}
          textColor="#828282"
        />

        <InfoWithIcon
          icon={<MapPin />}
          title={event.place || ''}
          textColor="#828282"
        />

        <InfoWithIcon
          icon={<Image source={require('../../assets/images/ellipse.png')} />}
          title={event.organizer || ''}
          textColor="#333333"
          fontWeight="bold"
        />

        <Text style={eventDetailStyles.eventDescriptionText}>
          {event.description}
        </Text>
      </View>
      <Image
        style={eventDetailStyles.mapContainer}
        source={require('../../assets/images/map.png')}
      />
    </>
  );
};

export default EventDetail;
