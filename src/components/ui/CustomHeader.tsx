import React from 'react'
import { Image } from 'react-native'

export const CustomHeader = () => {
  return (
    <Image
      source={require("../../../images/heading.png")}
      style={{width:"100%"}}
    />
  )
}
