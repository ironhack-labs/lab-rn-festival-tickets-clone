import React from 'react'
import { View, Image } from 'react-native'
import MapPin from '../../icons/MapPin'
import Paragraph from '../typography/Paragraph'
import { DateTimeInfoProps } from '../interfaces/DateTimeInfoProps'
import { AddressInfoProps } from '../interfaces/AddressInfoProps'
import { colors } from '../globals/colors'

const AddressInfo = ({ address }: AddressInfoProps) => {
    return (
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <MapPin />
            <Paragraph style={{ marginStart: 16, color: colors.gray3 }}>{address}</Paragraph>
        </View>
    )
}

export default AddressInfo