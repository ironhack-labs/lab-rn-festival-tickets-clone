import {StyleSheet} from 'react-native';

export const similarEventsStyles = StyleSheet.create({
  titleText: {
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 20,
    color: '#273431',
    fontSize: 20,
    fontWeight: '700',
  },
  scrollContainer: {paddingHorizontal: 20},
});

export const similarEventStyles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  titleText: {flex: 1, fontSize: 14, fontWeight: '600'},
  subTitleContainer: {flexDirection: 'row'},
  dateAndHourText: {flex: 1, fontSize: 12},
  priceText: {fontSize: 16, fontWeight: '700'},
});
