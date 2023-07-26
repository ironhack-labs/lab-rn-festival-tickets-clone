import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

type DataElement = {
  id: string;
  title: string;
  iconElement: JSX.Element | null;
};

type Props = {
  data: DataElement[];
};

const renderItems = ({item}: {item: DataElement}) => (
  <View style={styles.item}>
    {item.iconElement}
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const DisplayList = ({data}: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItems}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: '#828282',
    marginHorizontal: 15,
  },
});

export default DisplayList;
