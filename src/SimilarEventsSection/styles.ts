import { StyleSheet } from 'react-native'
import { Colors } from '../../App'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
  },
  text: {
    fontFamily: 'Poppins',
  },
  title: {
    fontSize: 20,
    color: Colors.gray1,
    fontWeight: '700',
  },
  scrollView: {
    gap: 20,
    marginTop: 16,
  },
  card: {
    width: 291,
  },
  cardHeader: {
    marginTop: 8,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.blackGreen,
  },
  cost: {
    fontSize: 16,
    fontWeight: '700',
  },
})

export default styles
