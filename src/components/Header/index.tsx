import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

// type HeaderProps = PropsWithChildren<{}>;

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/heading.png')}
        style={styles.heroImage}
      />
    </View>
  );
};

export default Header;
