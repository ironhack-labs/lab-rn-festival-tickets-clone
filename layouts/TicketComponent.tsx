/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
} from 'react-native';
import {ImageContainer, TopTabs} from '../components';
import Date from '../icons/Date';
import MapPin from '../icons/MapPin';
import {formatDate} from '../helpers/formatDate';
import {Carousel} from '../components/Carousel';

type TicketProps = {
  imageUrl: number;
  ticketInfo: {
    title: string;
    subTitle: string;
    price: string;
    date: string;
    time: string;
    location: string;
    author: string;
    description: string;
    image: number;
    imageLocation: number;
  };
};

export const TicketComponent = ({imageUrl, ticketInfo}: TicketProps) => {
  const [activeTab, setActiveTab] = useState('Info');
  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ImageContainer
        imageUrl={imageUrl}
        stylesContainer={styles.imageContainer}
      />

      <TopTabs
        tabs={['Info', 'Prices']}
        activeTab={activeTab}
        onPress={handleTabPress}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.priceTag}>${ticketInfo.price}</Text>
        <Text style={styles.titleContainer}>
          {ticketInfo.title} | {ticketInfo.subTitle}
        </Text>
        <View style={styles.row}>
          <Date width={20} height={20} />
          <View>
            <Text style={styles.textIcon}>{formatDate(ticketInfo.date)}</Text>
            <Text style={styles.textIcon}>{ticketInfo.time}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <MapPin width={20} height={20} />
          <Text style={styles.textIcon}>{ticketInfo.location}</Text>
        </View>

        <View style={styles.row}>
          <Image source={ticketInfo.image} width={20} height={20} />
          <Text style={styles.textIcon}>{ticketInfo.author}</Text>
        </View>

        <View>
          <Text style={styles.description}>{ticketInfo.description}</Text>
        </View>
      </View>

      <View style={{marginVertical: 20}}>
        <ImageContainer
          imageUrl={ticketInfo.imageLocation}
          stylesContainer={styles.imageContainer}
        />
      </View>

      <View>
        <Text
          style={[
            styles.textIcon,
            {marginBottom: 15, fontSize: 22, fontWeight: 'bold'},
          ]}>
          Similar Events
        </Text>
        <Carousel />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  priceTag: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  titleContainer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  textIcon: {
    marginLeft: 20,
  },
  description: {
    ...Platform.select({
      ios: {
        lineHeight: 20,
      },
      android: {
        lineHeight: 30,
      },
    }),
  },
  imageContainer: {
    width: '100%',
    padding: 0,
    margin: 0,
    overflow: 'hidden',
  },
});
