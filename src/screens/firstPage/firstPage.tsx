import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface InformationProps {
  navigation: any;
}

const FirstPage = ({navigation}: InformationProps) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.DrawerButton}>
            <Text style={styles.ButtonText}>Drawer</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>React Native Tutorial from Educative io</Text>
      </View>
    </ScrollView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  text: {
    color: '#6ABDA6',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 8,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DrawerButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  ButtonText: {
    color: '#fff',
  },
});
