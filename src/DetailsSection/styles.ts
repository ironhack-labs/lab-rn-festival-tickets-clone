import { StyleSheet } from 'react-native'
import { Colors } from '../../App'

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  text: {
    fontFamily: 'Poppins',
  },
  container: {},
  price: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: '700',
    marginVertical: 8,
    lineHeight: 28.4,
  },
  title: {
    fontSize: 24,
    color: Colors.gray1,
    fontWeight: '700',
  },
  information: {
    color: Colors.gray3,
    fontWeight: '500',
  },
  date: {
    gap: 16,
    marginTop: 16,
    flexDirection: 'row',
  },
  dateText: {
    gap: 8,
    flexDirection: 'column',
  },
  address: {
    gap: 16,
    marginVertical: 16,
    flexDirection: 'row',
  },
  organizerView: {
    gap: 16,
    marginBottom: 16,
    flexDirection: 'row',
  },
  organizer: {
    fontSize: 14,
    fontWeight: '700',
  },
  description: {
    color: Colors.gray2,
    fontSize: 14,
    lineHeight: 25,
    marginBottom: 8,
    fontWeight: '400',
    textAlign: 'justify',
    fontFamily: 'Roboto',
  },
})

export default styles
