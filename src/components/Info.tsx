import React from 'react'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import { styles } from '../globals/styles'
import Header from './Header'
import Tab from './Tab'
import H1 from '../typography/H1'
import H2 from '../typography/H2'
import { colors } from '../globals/colors'
import DateTimeInfo from './DateTimeInfo'
import AddressInfo from './AddressInfo'
import OrganizerInfo from './OrganizerInfo'
import Paragraph from '../typography/Paragraph'
import BottomButton from './BottomButton'
import SimilarEvents from './SimilarEvents'

const Info = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={{ flex: 1 }}>
                <Tab />
                <ScrollView
                    style={{ flex: 1 }}
                >
                    <View style={{ paddingHorizontal: 16 }}>
                        <H2 bold style={{ color: colors.accentText, marginVertical: 7 }}>$300</H2>
                        <H1 bold>Binational Vs UTC | Opening 2020 - Date 4</H1>
                        <View style={{ height: 80, justifyContent: 'space-between', marginVertical: 20 }}>
                            <DateTimeInfo date='Saturday December 24' time='8:00 pm' />
                            <AddressInfo address='Alberto Gallardo Rimac 2304' />
                        </View>
                        <OrganizerInfo icon={require('../../images/Ellipse-1.png')} title='Organizer SAC.' />
                        <Paragraph style={{ marginTop: 20, color: colors.gray2 }}>
                            This Friday will be a historic day for our region, and you have to be present. In the duel for date 4 of League 1, against UTC, we will inaugurate the lights of the Guillermo Briceño Rosamedina stadium, thanks to the excellent management of our board of directors.
                        </Paragraph>
                    </View>
                    <Image
                        style={{ width: '100%', marginVertical: 15 }}
                        source={require('../../images/map.png')}
                    />
                    <SimilarEvents />
                </ScrollView>
            </View>
            <BottomButton title='Buy tickets' onPress={() => Alert.alert('Congratulations', 'You buy a ticket', [{ text: 'Ok' }])} />
        </View>
    )
}

export default Info