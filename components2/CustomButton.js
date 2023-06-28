import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const CustomButton = ({ label, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
    }}>
    <Text
      style={{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
      }}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default CustomButton;
