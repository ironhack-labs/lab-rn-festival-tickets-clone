import React from 'react'
import { View, Image } from 'react-native'
import Date from '../../icons/Date'
import Paragraph from '../typography/Paragraph'
import { DateTimeInfoProps } from '../interfaces/DateTimeInfoProps'
import { colors } from '../globals/colors'

const DateTimeInfo = ({ date, time }: DateTimeInfoProps) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Date />
            <View style={{ marginStart: 16 }}>
                <Paragraph style={{ marginBottom: 10, color: colors.gray3 }}>{date}</Paragraph>
                <Paragraph style={{ color: colors.gray3 }}>{time}</Paragraph>
            </View>
        </View>
    )
}

export default DateTimeInfo