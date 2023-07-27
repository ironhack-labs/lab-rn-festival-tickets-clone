import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

export const NavBar = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
        <View style={{padding: 16, borderBottomWidth: 1, borderBottomColor: '#6ABDA6', marginLeft: 16}}>
          <Text style={{color: "#6ABDA6", fontSize: 14, fontWeight: "600", fontFamily: 'Poppins'}}>Info</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 16}}>
          <Text style={{color: "rgba(0, 0, 0, .6)", fontSize: 14, fontWeight: "600", fontFamily: 'Poppins'}}>Price</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};