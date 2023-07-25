import React from 'react'
import { Image } from 'react-native'

const Header = () => {
    return (
        <Image
            style={{ width: '100%' }}
            source={require('../../images/heading.png')} />
    )
}

export default Header