import { ScrollView, View, Text } from 'react-native'
import { EventCard, EventT } from './EventCard'
import styles from './styles'

const events: EventT[] = [
  {
    cost: '$300',
    title: 'PEPE Y TEO - STAND UP',
    date: 'Thursday June 11 | 9:00 pm',
    img: require('../../images/first-card.png'),
  },
  {
    cost: '$300',
    title: 'Papishower - TRUJILLO',
    date: 'Sunday 28 Dec | 8:00 pm',
    img: require('../../images/first-card.png'),
  },
  {
    cost: '$300',
    title: 'PEPE Y TEO - STAND UP',
    date: 'Thursday June 11 | 9:00 pm',
    img: require('../../images/first-card.png'),
  },
  {
    cost: '$300',
    title: 'Papishower - TRUJILLO',
    date: 'Sunday 28 Dec | 8:00 pm',
    img: require('../../images/first-card.png'),
  },
]

const SimilarEventsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Similar Events</Text>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        {events.map((event, index) => (
          <EventCard
            img={event.img}
            cost={event.cost}
            title={event.title}
            date={event.date}
            key={`event-card${index}`}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default SimilarEventsSection
