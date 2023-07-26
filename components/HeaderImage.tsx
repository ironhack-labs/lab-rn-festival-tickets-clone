import {
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';

const width = Dimensions.get('window').width;

export const HeaderImage = () => {
  return (
    <Image
      source={require('../images/heading.png')}
      style={styles.headerImage}
    />
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width,
  },
});
