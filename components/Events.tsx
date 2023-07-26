import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import HearthIcon from '../icons/Heart';

interface EventData {
  id: number;
  image: number;
  title: string;
  dateTime: string;
  price: string;
}

const SimilarEvents = () => {
  const similarEventsData: EventData[] = [
    {
      id: 1,
      image: require('../images/first-card.png'),
      title: 'PEPE Y TEO - STAND UP',
      dateTime: 'Thursday June 11 | 9:00 pm',
      price: '$300',
    },
    {
      id: 2,
      image: require('../images/first-card.png'),
      title: 'PEPE Y TEO - STAND UP',
      dateTime: 'Thursday June 11 | 9:00 pm',
      price: '$300',
    },
    {
      id: 3,
      image: require('../images/first-card.png'),
      title: 'PEPE Y TEO - STAND UP',
      dateTime: 'Thursday June 11 | 9:00 pm',
      price: '$300',
    },
    {
      id: 4,
      image: require('../images/first-card.png'),
      title: 'PEPE Y TEO - STAND UP',
      dateTime: 'Thursday June 11 | 9:00 pm',
      price: '$300',
    },
    {
      id: 5,
      image: require('../images/first-card.png'),
      title: 'PEPE Y TEO - STAND UP',
      dateTime: 'Thursday June 11 | 9:00 pm',
      price: '$300',
    },
  ];

  const renderItem = ({item}: {item: EventData}) => (
    <View style={styles.eventCard}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.eventImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.eventDetails}>
        <View style={styles.eventTitleRow}>
          <Text style={[styles.eventTitle, styles.poppinsFont]}>
            {item.title}
          </Text>
          <HearthIcon
            width={26}
            height={26}
            fill="#828282"
            style={styles.mapIcon}
          />
        </View>
        <View style={styles.eventInfo}>
          <View style={styles.eventDateTimePrice}>
            <Text style={[styles.eventDateTime, styles.poppinsFont]}>
              {item.dateTime}
            </Text>
            <Text style={[styles.eventPrice, styles.poppinsFont]}>
              {item.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.poppinsFont]}>Similar Events</Text>
      <FlatList
        data={similarEventsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000000',
    marginLeft: 16,
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  eventCard: {
    width: 290,
    height: 400,
    marginRight: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden', 
  },
  eventImage: {
    width: '100%',
    height: '100%',
  },
  eventDetails: {
    flex: 1,
    padding: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  eventInfo: {
    flex: 1,
  },
  eventDateTimePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  eventDateTime: {
    fontSize: 12,
    color: '#828282',
    marginTop: 2,
  },
  eventPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  eventTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  mapIcon: {
    marginLeft: 4,
  },
  poppinsFont: {
    fontFamily: 'Poppins-Regular',
  },
});

export default SimilarEvents;
