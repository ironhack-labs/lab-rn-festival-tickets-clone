import {StyleSheet} from 'react-native';

import globalStyles, {globalMargin} from '../../styles/global';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: globalMargin,
  },
  infoContainer: {
    ...globalStyles.sectionContainer,
  },
  price: {
    ...globalStyles.header2,
    color: '#6abda6',
  },
  title: {
    ...globalStyles.header1,
    marginBottom: globalMargin,
  },
  sectionsContainer: {
    marginVertical: globalMargin,
  },
  section: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: globalMargin / 4,
  },
  dateInfo: {
    gap: 5,
  },
  sectionIcon: {
    width: 16,
    height: 16,
    marginTop: 3,
  },
  sectionValue: {
    ...globalStyles.bodyText,
    color: '#828282',
  },
  organizerAvatar: {
    width: 16,
    height: 16,
  },
  organizerName: {
    ...globalStyles.header3,
  },
  description: {
    ...globalStyles.bodyText,
    textAlign: 'justify',
  },
  map: {
    width: '100%',
  },
});
