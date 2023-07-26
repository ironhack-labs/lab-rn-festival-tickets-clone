import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Date from '../../../icons/Date'
import SvgComponent from '../../../icons/MapPin'
import Heart from '../../../icons/Heart'

const eventData = {
  price: 300,
  title: "Binational Vs UTC | Opening 2020 - Date 4",
  date: "Saturday December 24",
  time: "8:00 pm",
  place: "Alberto Gallardo Rimac 2304",
  organizer: "Organizer SAC.",
  description: "This Friday will be a historic day for our region, and you have to be present. In the duel for date 4 of League 1, against UTC, we will inaugurate the lights of the Guillermo Briceño Rosamedina stadium, thanks to the excellent management of our board of directors.",
  mapImgSrc: "../../../images/map.png",
  similarEvents: [
    {
      imgSrc: require("../../../images/first-card.png"),
      tile: "PEPE Y TEO - STAND UP",
      date: "Thursday June 11 | 9:00 pm",
      price: 300
    },
    {
      imgSrc: require("../../../images/second-card.png"),
      tile: "Papishower - TRUJILLO",
      date: "Sunday 28 Dec | 8:00 pm",
      price: 300
    }
  ]

}

export const Details = () => {
  return (
    <ScrollView style={{ marginTop:10}}>
      <View style={{marginHorizontal:10}}>
        <Text style={styles.price}>$ {eventData.price}</Text>
        <Text style={styles.title}>{eventData.title}</Text>
        <View style={styles.infoContainer}>
          <Date/>
          <Text style={styles.infoText}>{eventData.date}</Text>
        </View>
        <Text style={{...styles.infoText, marginLeft:31, marginTop:10,}}>{eventData.time}</Text>
        <View style={styles.infoContainer}>
          <SvgComponent/>
          <Text style={styles.infoText}>{eventData.place}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Image source={require("../../../images/Ellipse1.png")}/>
          <Text style={{...styles.infoText, fontWeight:"bold", color:"#333333"}}>{eventData.organizer}</Text>
        </View>
        <Text style={styles.description}>{eventData.description}</Text>
      </View>
      <Image source={require("../../../images/map.png")} style={{width:"100%", marginTop:10}}/>
      {/* <View style={{marginTop:10, marginLeft:10}}>
        <Text style={styles.similarTitle}>Similar Events</Text>
        <FlatList
          data={eventData.similarEvents}
          horizontal={true}
          renderItem={({item}) => 
            <View>
              <Image
                source={item.imgSrc}
                style={{height:300,}}
                resizeMode="contain"
                resizeMethod="scale"
              />
              <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                <Text>{item.tile}</Text>
                <Heart/>
              </View>
            </View>
          }
        />
      </View> */}
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  price: {
    color: "#6abda6",
    fontSize:20,
    fontWeight:"bold"
  },
  title : {
    fontSize: 28,
    fontWeight: "bold",
    marginTop:10,
  },
  infoContainer: {
    flexDirection:"row",  
    marginTop:10, 
    alignItems:"center"
  },
  infoText: {
    color:"#828282",
    marginLeft:15,
    fontSize:18,
  },
  description: {
    marginTop:10,
    fontSize:14,
    color:"#4F4F4F"
  },
  similarTitle: {
    color: "#273431",
    fontSize:25,
    fontWeight:"bold",
    marginBottom:10
  }
})
