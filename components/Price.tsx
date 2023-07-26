import { PropsWithChildren } from "react"
import { StyleSheet, Text } from "react-native"

type PriceProps = PropsWithChildren<{
    price: number
}>;

export const Price = ({ price } : PriceProps) => {
    return <Text style={styles.price}>${price}</Text>
}

const styles = StyleSheet.create({
    price: {
        marginVertical: 8,
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: "700",
        color: '#6ABDA6',
    }
})