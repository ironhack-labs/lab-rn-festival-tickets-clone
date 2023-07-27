import React from 'react'
import { 
  SafeAreaView, 
  View, 
  StatusBar, 
  ScrollView 
} from 'react-native';
import { 
  ContainerDetailsEvent, 
  EventDetails, 
  EventInfo, 
  Heading, 
  Location, 
  NavBar,
  Price, 
  PurchaseTicketsBtn,
  TitleEvent,
} from './src/components';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#FF9190"/>
      <ScrollView>
      <Heading/>
      <NavBar/>
      <View>
        <Price/>
        <TitleEvent/>
        <ContainerDetailsEvent>
          <EventDetails/>
        </ContainerDetailsEvent>
        <PurchaseTicketsBtn/>
        <Location/>
        <EventInfo/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;