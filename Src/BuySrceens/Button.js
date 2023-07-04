import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';

const otpScreen = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

const Button1 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#d6e4f2' }}>
      <View style={{ marginTop: 40, marginLeft: 20 }}>
        <Text style={{ fontSize: 25, color: '#000' }}>Email Verification</Text>
      </View>
      <View style={{ marginLeft: 10, marginTop: 20 }}>
        <TextInput
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor:"#757575",
            width: 320,
            height: 50,
            marginLeft: 10,
          }}
          placeholder="Enter your valid Email ID"
        />
        <TouchableOpacity onPress={otpScreen}>
          <View
            style={{
              width: 150,
              height: 50,
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor:"#757575",
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              alignSelf: 'center',
              backgroundColor: '#ACC8E5',
            }}
          >
            <Text style={{ fontSize: 15, color: '#000' }}>GET OTP</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 10, marginTop: 30, flexDirection: 'row' }}>
        <TextInput
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor:"#757575",
            width: 180,
            height: 50,
            marginLeft: 10,
          }}
          placeholder="Submit OTP"
        />
        <TouchableOpacity onPress={otpScreen}>
          <View
            style={{
              width: 110,
              height: 50,
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor:"#757575",
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 30,
              alignSelf: 'center',
              backgroundColor: '#ACC8E5',
            }}
          >
            <Text style={{ fontSize: 15, color: '#000' }}>SUBMIT OTP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button1;
