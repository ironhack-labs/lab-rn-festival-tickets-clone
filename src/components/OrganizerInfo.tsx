import React from 'react'
import { OrganizerInfoProps } from '../interfaces/OrganizerInfoProps'
import { Image, View } from 'react-native'
import Paragraph from '../typography/Paragraph'

const OrganizerInfo = ({ title, icon }: OrganizerInfoProps) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                resizeMode='contain'
                style={{ height: 16, width: 16, marginEnd: 16 }}
                source={icon}
            />
            <Paragraph bold>{title}</Paragraph>
        </View>
    )
}

export default OrganizerInfo