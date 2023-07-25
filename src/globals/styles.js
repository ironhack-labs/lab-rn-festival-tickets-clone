import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    tab: {
        flexDirection: "row",
        height: 48,
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 16
    },
    focusTabItem: {
        height: '100%',
        justifyContent: 'space-around',
        alignItems: "center",
        width: 60,
        marginEnd: 20
    },
    bttomButton: {
        backgroundColor: '#fb4446',
        width: '100%',
        height: 65,
        alignItems: 'center',
        justifyContent: "center"
    },
    similarEventItem: {
        height: 255,
        width: 290,
        marginHorizontal: 8
    }
})

export const typoStyles = StyleSheet.create({
    h1: {
        fontSize: 24,
        color: colors.gray1
    },
    h2: {
        fontSize: 20,
        color: colors.gray1
    },
    paragraph: {
        fontSize: 14,
        color: colors.gray1
    }
})