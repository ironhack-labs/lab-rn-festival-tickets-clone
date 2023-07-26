import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconWithText from './ListElement';
import Date from '../../icons/Date';
import SvgComponent from '../../icons/MapPin';
import ImageWithText from './OrganizerElement';

interface EventDetailsProps {
  price: string;
  eventTitle: string;
  date: string;
  location: string;
  organizerImage: string;
  organizerText: string;
  description: string;
}

const EventDetails = ({
  price,
  eventTitle,
  date,
  location,
  organizerImage,
  organizerText,
  description,
}: EventDetailsProps) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.eventTitle}>{eventTitle}</Text>
      <IconWithText icon={<Date />} text={`Date: ${date}`} />
      <IconWithText icon={<SvgComponent />} text={location} />
      <ImageWithText image={organizerImage} text={organizerText} />
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6ABDA6',
  },
  eventTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 3,
    color: '#00000085',
    fontWeight: '500',
    textAlign: 'justify',
  },
});

export default EventDetails;
