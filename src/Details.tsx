import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import Date from '../icons/Date'
import MapPin from '../icons/MapPin'

interface DetailsProps {
    price: string,
    eventName: string,
    eventDate: string,
    eventHour: string,
    organizer: string,
    eventLocation: string,
    eventDescription: string,
}

const Details: React.FC<DetailsProps> = ({ price, eventName, eventDate, eventHour, organizer, eventLocation, eventDescription }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerDetails}>
                <Text style={styles.price}>${price}</Text>
                <Text style={styles.eventName}>{eventName}</Text>
                <View style={styles.gridContainer}>
                    <Date style={styles.item1} />
                    <View style={styles.item2}>
                        <Text style={styles.text}>{eventDate}</Text>
                        <Text style={[styles.text, { paddingTop: 15 }]}>{eventHour}</Text>
                    </View>
                </View>
                <View style={styles.gridContainer}>
                    <MapPin style={styles.item1} />
                    <Text style={[styles.item2, styles.text]}>{eventLocation}</Text>
                </View>
                <View style={styles.gridContainer}>
                    <Image
                        resizeMode='contain'
                        style={styles.item1}
                        source={require('../images/Ellipse1.png')} />
                    <Text style={[styles.item2, styles.text]}>{organizer}</Text>
                </View>
                <Text style={styles.descriptionText}>{eventDescription}</Text>

            </View >
            <Image style={styles.image}
                source={require('../images/map.png')} />
        </View >
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 35
    },
    containerDetails: {
        paddingHorizontal: 20,
    },
    price: {
        color: '#6ABDA6',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10
    },
    eventName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333333',

        paddingVertical: 20
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10
    },
    item1: {
        width: 15,
    },
    item2: {
        width: 'auto',
        paddingLeft: 20,
        fontSize: 14,
    },
    text: {
        fontSize: 14,
        color: '#828282',
        fontWeight: '500'
    },
    descriptionText: {
        fontSize: 14,
        color: '#828282',
        fontWeight: '400',
        lineHeight: 25,
        textAlign: 'justify',
        paddingVertical: 15
    },
    image: {
        width: 'auto',
        height: 171,
    },
})