import React from 'react'
import { SimilarEventCardProps } from '../interfaces/SimilarEventCardProps'
import { Image, Pressable, View } from 'react-native'
import Paragraph from '../typography/Paragraph'
import { colors } from '../globals/colors'
import Heart from '../../icons/Heart'
import { styles } from '../globals/styles'

const SimilarEventCard = ({ item, onItemPress }: SimilarEventCardProps) => {
    return (
        <Pressable 
        onPress={onItemPress}
        style={styles.similarEventItem}>
            <Image
                style={{ width: '100%' }}
                source={item.image}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginBottom: 15 }}>
                <Paragraph bold>{item.title}</Paragraph>
                <Heart />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                <Paragraph style={{ color: colors.gray3 }}>{item.dateTime}</Paragraph>
                <Paragraph bold>{item.price}</Paragraph>
            </View>
        </Pressable>
    )
}

export default SimilarEventCard