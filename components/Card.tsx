/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Image, StyleSheet} from 'react-native';
import Heart from '../icons/Heart';
import {formatDate} from '../helpers/formatDate';

type CardProps = {
  title: string;
  date: string;
  time: string;
  price: string;
};

type DataProps = {
  data: CardProps;
};

export const Card = ({data}: DataProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/first-card.png')} />
      <View style={styles.row}>
        <Text style={styles.title}>{data.title}</Text>
        <Heart />
      </View>
      <View style={styles.row}>
        <Text style={styles.subTitle}>
          {formatDate(data.date)} | {data.time}
        </Text>
        <Text style={styles.price}>${data.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
  },
  price: {
    fontWeight: 'bold',
  },
});
