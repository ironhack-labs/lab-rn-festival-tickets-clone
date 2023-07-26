import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface ImageWithTextProps {
  image: string;
  text: string;
}

const ImageWithText = ({ image, text }: ImageWithTextProps) => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 10,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default ImageWithText;
