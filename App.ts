import { Platform, StatusBar, StyleSheet, TextBase } from 'react-native'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight

export const Colors = {
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#828282',
  white: '#FFFFFF',
  primary: '#6ABDA6',
  blackMedium: '#000000',
  secondaryColor: '#FF5D57',
  statusBar: '#FF9190',
  blackGreen: '#273431',
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: Colors.statusBar,
  },
  headingImg: {
    width: '100%',
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  content: {
    flex: 1,
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
    lineHeight: 1.42,
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
  buyButton: {
    bottom: 0,
    height: 65,
    color: Colors.white,
    width: '100%',
    alignSelf: 'flex-end',
    position: 'absolute',
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: Colors.secondaryColor,
  },
  textButon: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
})

export default styles
