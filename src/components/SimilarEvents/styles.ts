import {StyleSheet} from 'react-native';

import globalStyles, {globalMargin, globalPadding} from '../../styles/global';

export default StyleSheet.create({
  container: {},
  sectionHeader: {
    ...globalStyles.header2,
    marginHorizontal: globalMargin,
  },
  scrollContainer: {
    gap: 15,
    paddingHorizontal: globalPadding,
    marginVertical: 15,
  },
  event: {
    backgroundColor: '#fff',
    width: 290,
  },
  hero: {
    width: '100%',
    height: 180,
    borderRadius: 15,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    ...globalStyles.header3,
  },
  datePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    ...globalStyles.bodyText,
    color: '#273431',
  },
  price: {
    ...globalStyles.header3,
  },
});
