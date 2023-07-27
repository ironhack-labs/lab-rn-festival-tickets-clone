import { ScrollView, View, Text, Image } from 'react-native'
import SimilarEventsSection from '../SimilarEventsSection'
import MapPin from '../../icons/MapPin'
import Date from '../../icons/Date'
import styles from './styles'

const DetailsSection = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <Text style={[styles.text, styles.price]}>$300</Text>
        <Text style={[styles.text, styles.title]}>
          Binational Vs UTC | Opening 2020 - Date 4
        </Text>
        <View style={styles.date}>
          <Date />
          <View style={styles.dateText}>
            <Text style={[styles.text, styles.information]}>
              Saturday December 24
            </Text>
            <Text style={[styles.text, styles.information]}>8:00 pm</Text>
          </View>
        </View>
        <View style={styles.address}>
          <MapPin />
          <Text style={[styles.text, styles.information]}>
            Alberto Gallardo Rimac 2304
          </Text>
        </View>
        <View style={styles.organizerView}>
          <Image source={require('../../images/profile.png')} />
          <Text style={[styles.text, styles.organizer]}>Organizer SAC.</Text>
        </View>
        <Text style={styles.description}>
          This Friday will be a historic day for our region, and you have to be
          present. In the duel for date 4 of League 1, against UTC, we will
          inaugurate the lights of the Guillermo Briceño Rosamedina stadium,
          thanks to the excellent management of our board of directors.
        </Text>
        <Image source={require('../../images/map.png')} />
        <SimilarEventsSection />
      </View>
    </ScrollView>
  )
}

export default DetailsSection
