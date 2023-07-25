import React from 'react'
import { BottomButtonProps } from '../interfaces/BottomButtonProps'
import { Pressable } from 'react-native'
import Paragraph from '../typography/Paragraph'
import { colors } from '../globals/colors'
import { styles } from '../globals/styles'

const BottomButton = (props: BottomButtonProps) => {
    return (
        <Pressable
            {...props}
            style={styles.bttomButton}
        >
            <Paragraph bold style={{ color: colors.white }}>{props.title}</Paragraph>
        </Pressable>
    )
}

export default BottomButton