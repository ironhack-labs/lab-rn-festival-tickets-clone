import { View, Image, Text, ImageSourcePropType } from 'react-native'
import Heart from '../../icons/Heart'
import styles from './styles'

export type EventT = {
  cost: string
  date: string
  title: string
  img: ImageSourcePropType
}

export const EventCard = (props: EventT) => {
  const { img, cost, date, title } = props

  return (
    <View style={styles.card}>
      <Image source={img} />
      <View style={styles.cardHeader}>
        <Text>{title}</Text>
        <Heart />
      </View>
      <View style={styles.information}>
        <Text style={[styles.text, styles.date]}>{date}</Text>
        <Text style={[styles.text, styles.cost]}>{cost}</Text>
      </View>
    </View>
  )
}
