import {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type OrganizerProps = {
  organizer: string;
  photo: ReactNode;
};

export const Organizer = ({organizer, photo}: OrganizerProps) => {
  return (
    <View style={styles.container}>
      {photo}
      <Text style={styles.organizer}>{organizer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  organizer: {
    color: '#333333',
    fontFamily: 'Poppins',
    fontSize: 14,
    marginLeft: 16,
    fontWeight: '700',
  },
});
