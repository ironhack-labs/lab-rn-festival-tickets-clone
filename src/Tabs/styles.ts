import { StyleSheet } from 'react-native'
import { Colors } from '../../App'

const styles = StyleSheet.create({
  tabs: {
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins',
  },
  tab: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '600',
    color: Colors.blackMedium,
    letterSpacing: 0.75,
  },
  active: {
    color: Colors.primary,
  },
  activeBtn: {
    height: 48,
    borderBottomWidth: 2,
    justifyContent: 'center',
    borderBottomColor: Colors.primary,
  },
})

export default styles
