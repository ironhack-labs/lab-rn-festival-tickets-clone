import { Text } from '@digitaltitransversal/tr_superapp_theme';
import React from 'react';
import { View } from 'react-native';

const HeaderMenuDrawer = () => {
  return (
    <View testID="card_sku">
      <Text variant={'small-body'} numberOfLines={2}>
        Hola header
      </Text>
    </View>
  );
};

export default HeaderMenuDrawer;
