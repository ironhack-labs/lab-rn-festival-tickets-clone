import React from "react"
import { View, Image, Text, StyleSheet, ImageURISource, Dimensions } from "react-native"
import Heart from "../icons/Heart"

export interface SimilarEventsProps {
    image: ImageURISource,
    eventName: string,
    eventDate: string,
    eventHour: string,
    price: string,
}

const SimiliarEvents: React.FC<SimilarEventsProps> = ({ image, eventName, eventDate, eventHour, price }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                resizeMode='contain'
                source={image} />
            <View style={styles.gridContainer}>
                <Text style={styles.eventName}>{eventName}</Text>
                <Heart style={styles.item2} />
            </View>
            <View style={styles.gridContainer}>
                <Text style={styles.eventDate}>{eventDate} | {eventHour}</Text>
                <Text>${price}</Text>
            </View>
        </View>
    )
}
export default SimiliarEvents

const styles = StyleSheet.create({
    container: {
        paddingBottom: 150,
        width: Dimensions.get('window').width - 40,
        overflow: 'hidden',
        marginHorizontal: 20
    },
    image: {
        borderRadius: 14,
        width: '100%',
        height: 250,
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    item1: {

    },
    item2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    eventName: {
        fontWeight: '600',
        color: '#273431',
        fontSize: 14,
        lineHeight: 18
    },
    eventDate: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18,
        color: '#273431'
    },
    price:{
        color: '#273431',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24
    }
})