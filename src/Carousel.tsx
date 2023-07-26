import React from "react"
import { Dimensions, FlatList, StyleSheet, View } from "react-native"
import SimiliarEvents, { SimilarEventsProps } from "./SimilarEvents";

const Carousel = () => {

    const data: SimilarEventsProps[] = [
        { image: require('../images/first-card.png'), eventName: 'PEPE Y TEO - STAND UP', eventDate: 'Jueves 11 jun.', eventHour: '9:00 pm', price: '300' },
        { image: require('../images/first-card.png'), eventName: 'PEPE Y TEO - STAND UP2', eventDate: 'Jueves 11 jun.', eventHour: '9:00 pm', price: '300' },
        { image: require('../images/first-card.png'), eventName: 'PEPE Y TEO - STAND UP', eventDate: 'Jueves 11 jun.', eventHour: '9:00 pm', price: '300' }
    ]
    return (
        <View>
            <FlatList
                style={style.container}
                data={data}
                keyExtractor={(item) => item.eventName}
                horizontal
                pagingEnabled
                renderItem={({ item }) => <SimiliarEvents image={item.image}
                    eventName={item.eventName} eventDate={item.eventDate}
                    eventHour={item.eventHour} price={item.price} />} />
        </View>)
}
export default Carousel;

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})