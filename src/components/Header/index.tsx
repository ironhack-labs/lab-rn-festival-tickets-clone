import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

import styles from './styles';

type HeaderProps = PropsWithChildren<{}>;

const Header = ({children}: HeaderProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Header;
