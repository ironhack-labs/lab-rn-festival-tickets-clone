import {View, Text, StyleProp, TextStyle} from 'react-native';
import React, {FC, useMemo} from 'react';
import {infoWithIconStyles} from './styles';
import {InfoWithIconProps} from '../../types';

const InfoWithIcon: FC<InfoWithIconProps> = ({
  icon,
  title,
  subTitle,
  textColor,
  fontWeight = 'normal',
}) => {
  const textDefaultStyle = useMemo<StyleProp<TextStyle>>(
    () => ({
      color: textColor,
      fontWeight,
    }),
    [fontWeight, textColor],
  );

  return (
    <View style={infoWithIconStyles.container}>
      {icon}
      <View>
        <Text style={[textDefaultStyle, infoWithIconStyles.infoText]}>
          {title}
        </Text>
        {subTitle && (
          <Text style={[textDefaultStyle, infoWithIconStyles.infoText]}>
            {subTitle}
          </Text>
        )}
      </View>
    </View>
  );
};

export default InfoWithIcon;
