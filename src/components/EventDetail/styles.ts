import {StyleSheet} from 'react-native';

export const eventDetailStyles = StyleSheet.create({
  container: {flex: 1},
  eventPriceText: {
    color: '#6ABDA6',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 15,
  },
  eventTitleText: {
    color: '#333333',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    marginVertical: 10,
  },
  eventDescriptionText: {
    color: '#4F4F4F',
    fontSize: 14,
    lineHeight: 25,
    marginVertical: 15,
  },
  mapContainer: {
    width: '100%',
  },
});

export const infoWithIconStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 8,
    gap: 15,
  },
  infoText: {lineHeight: 21, fontSize: 14},
});
