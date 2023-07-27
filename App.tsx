import React from 'react'
import {
  StatusBar,
  useColorScheme,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import styles, { Colors as AppColors } from './App'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import DetailsSection from './src/DetailsSection'
import Tabs from './src/Tabs/Tab'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <View style={backgroundStyle}>
      <View style={styles.statusBar}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={AppColors.statusBar}
        />
      </View>
      <Image
        style={styles.headingImg}
        source={require('./images/heading.png')}
      />
      <View style={styles.content}>
        <Tabs />
        <DetailsSection />
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={[styles.text, styles.textButon]}>Buy Tickets</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App
