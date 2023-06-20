import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import {COLORS, FONTS, SIZES} from '../constants';

const BuySellButton = ({label, icon, containerStyle, onPress,backgroundColor}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width:"45%",
        borderRadius: SIZES.base,
        backgroundColor: backgroundColor,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Text style={{marginLeft:SIZES.base, ...FONTS.h3, color:COLORS.white}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BuySellButton;
