import React, {PropsWithChildren, useContext} from 'react';
import {Image, Text, View} from 'react-native';

import type {EventDetails} from '../../types/event.type';

import DetailsProvider, {DetailsContext} from './context/DetailsContext';

import {formatDate, formatPrice, getTimeFromDate} from '../../helpers';

import Date from '../../../assets/icons/Date';
import MapPin from '../../../assets/icons/MapPin';

import styles from './styles';

type DetailsProps = PropsWithChildren<{
  details: EventDetails;
}>;

const DetailsPrice = () => {
  const {details} = useContext(DetailsContext);

  return <Text style={styles.price}>{formatPrice(details.price)}</Text>;
};

const DetailsTitle = () => {
  const {details} = useContext(DetailsContext);

  return <Text style={styles.title}>{details.title}</Text>;
};

const DetailsDate = () => {
  const {details} = useContext(DetailsContext);

  return (
    <View style={styles.section}>
      <Date style={styles.sectionIcon} />
      <View style={styles.dateInfo}>
        <Text style={styles.sectionValue}>{formatDate(details.date)}</Text>
        <Text style={styles.sectionValue}>{getTimeFromDate(details.date)}</Text>
      </View>
    </View>
  );
};

const DetailsPlace = () => {
  const {details} = useContext(DetailsContext);

  return (
    <View style={styles.section}>
      <MapPin style={styles.sectionIcon} />
      <Text style={styles.sectionValue}>{details.place}</Text>
    </View>
  );
};

const DetailsOrganizer = () => {
  const {details} = useContext(DetailsContext);

  return (
    <View style={styles.section}>
      <Image
        source={require('./../../../assets/images/ellipse-1.png')}
        style={{...styles.sectionIcon, ...styles.organizerAvatar}}
      />
      <Text style={styles.organizerName}>{details.organizer}</Text>
    </View>
  );
};

const DetailsDescription = () => {
  const {details} = useContext(DetailsContext);

  return <Text style={styles.description}>{details.description}</Text>;
};

const DetailsContainer = ({details, children}: DetailsProps) => {
  return (
    <DetailsProvider details={details}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>{children}</View>
        <Image
          source={require('./../../../assets/images/map.png')}
          style={styles.map}
        />
      </View>
    </DetailsProvider>
  );
};

export const Details = Object.assign(DetailsContainer, {
  Price: DetailsPrice,
  Title: DetailsTitle,
  Date: DetailsDate,
  Place: DetailsPlace,
  Organizer: DetailsOrganizer,
  Description: DetailsDescription,
});
