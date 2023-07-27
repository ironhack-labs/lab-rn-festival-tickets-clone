import React, { FC } from 'react'
import { View } from 'react-native';

interface ContainerDetailsEventProps {
  children: React.JSX.Element
}

export const ContainerDetailsEvent:FC<ContainerDetailsEventProps> = ({children}) => {
  return (
    <>
      {children}
    </>
  )
};