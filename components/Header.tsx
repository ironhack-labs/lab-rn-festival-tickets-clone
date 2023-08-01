import React from 'react';
import {View, Image, StatusBar, StyleSheet, Dimensions} from 'react-native';

interface HeaderProps {
  backgroundColor: string;
  imageSource: any;
}

const Header: React.FC<HeaderProps> = ({backgroundColor, imageSource}) => {
  const {width} = Dimensions.get('window');

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <StatusBar backgroundColor={backgroundColor} />
      <Image source={imageSource} style={{width: width}} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
