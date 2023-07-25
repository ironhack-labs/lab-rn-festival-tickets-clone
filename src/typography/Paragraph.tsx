import React, { Children } from 'react'
import { Text } from 'react-native'
import { typoStyles } from '../globals/styles'
import { Typos } from '../interfaces/Typos'

const Paragraph = ({ style, children, bold }: Typos) => {
    return (
        <Text style={[typoStyles.paragraph, style, { fontWeight: bold ? 'bold' : 'normal' }]}>{children}</Text>
    )
}

export default Paragraph