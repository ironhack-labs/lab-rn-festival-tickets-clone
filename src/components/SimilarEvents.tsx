import React from 'react'
import { SimilarEvent } from '../interfaces/SimilarEvents'
import { Alert, FlatList, View } from 'react-native'
import SimilarEventCard from './SimilarEventCard'
import H2 from '../typography/H2'

const events: SimilarEvent[] = [
    {
        id: 1,
        image: require('../../images/first-card.png'),
        title: 'PEPE Y TEO - STAND UP',
        dateTime: 'Thursday June 11 | 9:00 pm',
        price: "$300"

    },
    {
        id: 2,
        image: require('../../images/first-card.png'),
        title: 'PEPE Y TEO - STAND UP',
        dateTime: 'Thursday June 11 | 9:00 pm',
        price: "$300"

    }
]

const SimilarEvents = () => {
    return (
        <View >
            <H2 bold style={{ marginHorizontal: 16, marginVertical: 15 }}>Similar Events</H2>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{ width: '100%' }}
                data={events}
                contentContainerStyle={{ paddingHorizontal: 8 }}
                renderItem={({ item }) => <SimilarEventCard item={item} onItemPress={() => Alert.alert(item.title, item.dateTime, [{text:'Ok'}])}/>}
                keyExtractor={(item, index) => item.id.toString()}
            />
        </View>
    )
}

export default SimilarEvents