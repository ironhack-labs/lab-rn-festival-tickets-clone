/* eslint-disable react/react-in-jsx-scope */
import {View, Image, StyleSheet} from 'react-native';

type ImageContainerProps = {
  imageUrl: number;
  stylesContainer: object;
};

export const ImageContainer = ({
  imageUrl,
  stylesContainer,
}: ImageContainerProps) => {
  return (
    <View style={stylesContainer}>
      <Image source={imageUrl} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
});
