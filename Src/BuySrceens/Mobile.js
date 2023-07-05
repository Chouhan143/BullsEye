import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../constants';
import { icons } from '../../constants';
import { useNavigation } from '@react-navigation/native';



const Mobile = (onPress) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#d6e4f2' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
        <Image source={icons.smartphone} style={{ width: 150, height: 150 }} />
      </View>

      <View style={{ marginTop: 10, alignSelf: 'center' }}>
        <Text style={{ fontSize: 25, color: '#000', textDecorationLine: 'underline', }}>Mobile Verification</Text>


      </View>
      <View>
        <Text style={{ fontSize: 18, color: '#000', paddingLeft: 15, marginTop: 50, }} numberOfLines={1}> Verification code on your Mobile Number</Text>
      </View>
      <View style={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, paddingLeft: 20, marginTop: 20, alignSelf: 'center', fontWeight: '200' }}
          numberOfLines={2}>
          We will send verification code on this mobile no.
        </Text>
      </View>

      <View style={{
        marginLeft: 10, marginTop: 100, width: 320,
        height: 70,
      }}>

        <TextInput
          style={{
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: "#757575",
            marginLeft: 10,
            paddingHorizontal: 10,

          }}
          placeholder="Enter your valid mobile number"
        />


      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Mobile2")}>
        <View
          style={{
            width: 320,
            height: 50,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: "#757575",
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            alignSelf: 'center',
            backgroundColor: '#ACC8E5',
          }}
        >
          <Text style={{ fontSize: 15, color: '#000' }}>GET OTP</Text>
        </View>
      </TouchableOpacity>
      


    </View>
  );
};

export default Mobile ;
