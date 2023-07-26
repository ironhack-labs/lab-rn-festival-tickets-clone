import {StyleSheet, Text} from 'react-native';

export const Description = () => {
  return (
    <Text style={styles.text}>
      This Friday will be a historic day for our region, and you have to be
      present. In the duel for date 4 of League 1, against UTC, we will
      inaugurate the lights of the Guillermo Briceño Rosamedina stadium, thanks
      to the excellent management of our board of directors.
    </Text>
  );
};

const styles = StyleSheet.create({
    text: {
        color: '#4F4F4F',
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: 25,
        marginTop: 16
    }
});
