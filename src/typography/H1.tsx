import React, { Children } from 'react'
import { Text } from 'react-native'
import { typoStyles } from '../globals/styles'
import { Typos } from '../interfaces/Typos'

const H1 = ({ style, children, bold }: Typos) => {
    return (
        <Text style={[typoStyles.h1, style, { fontWeight: bold ? 'bold' : 'normal' }]}>{children}</Text>
    )
}

export default H1