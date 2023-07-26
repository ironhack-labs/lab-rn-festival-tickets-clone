import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TabsInterface {
    text: string,
    isSelected: boolean
}

export interface TabsProps {
    tabs: TabsInterface[]
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {

    return (
        <View style={styles.container}>
            {tabs.map((t) => (
                t.isSelected ?
                    <View style={styles.tabSelected}><Text style={styles.tabSelectedText}>{t.text}</Text></View>
                    : <Text style={styles.tab}>{t.text}</Text>
            ))
            }
        </View >
    )

}

export default Tabs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    tab: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'gray'
    },
    tabSelected: {
        borderBlockColor: '#6ABDA6',
        borderBottomWidth: 2,
    },
    tabSelectedText: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        color: '#6ABDA6',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    }
})