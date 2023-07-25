import React, { Children } from 'react'
import { Text } from 'react-native'
import { typoStyles } from '../globals/styles'
import { Typos } from '../interfaces/Typos'

const H3 = ({ style, children, bold }: Typos) => {
    return (
        <Text style={[typoStyles.h2, style, { fontWeight: bold ? 'bold' : 'normal' }]}>{children}</Text>
    )
}

export default H3