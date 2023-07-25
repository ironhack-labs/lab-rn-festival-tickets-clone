import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../globals/styles'
import H3 from '../typography/H3'
import { colors } from '../globals/colors'
import Paragraph from '../typography/Paragraph'

const Tab = () => {
    return (
        <View style={styles.tab}>
            <View style={styles.focusTabItem}>
                <Paragraph style={{ color: colors.accentText }}>Info</Paragraph>
                <View style={{ height: 1, width: '100%', backgroundColor: colors.accentText }} />
            </View>
            <Paragraph>Prices</Paragraph>
        </View>
    )
}

export default Tab