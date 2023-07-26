import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  DateAndPlace,
  HeaderImage,
  Price,
  Tabs,
  Title,
  Organizer,
  BuyButton,
  Description,
} from './components';

/*
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
*/

function App(): JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: '#FF9190', flex: 1}}>
      <StatusBar backgroundColor={'#FF9190'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.containerStyle}>
        <HeaderImage />
        <View style={{paddingHorizontal: 16}}>
          <Tabs />
          <Price price={300} />
          <Title />
          <DateAndPlace />
          <Organizer
            organizer="Organizer SAC."
            photo={<Image source={require('./images/Ellipse1.png')} />}
          />
          <Description />
        </View>
          <Image source={require('./images/map.png')} style={{width: '100%', marginVertical: 16}} />
      </ScrollView>
      <BuyButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
  },
});

export default App;
