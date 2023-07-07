import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {COLORS} from '../constants';
import {icons} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {postData} from '../../constants/hooks/ApiHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Button1 = onPress => {
  const [emailOtp, setEmailOtp] = useState('');
  const handleGetOTPVerification = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      const payload = {otp: emailOtp, id: id};
      const response = await postData(
        'https://panel.bulleyetrade.com/api/mobile/verify-email-otp',
        payload,
      );


      const {status, payload: responseData} = response.data;
      if (status === 200) {
        const { mobile_verified_at, aadhar_verified_at} =
          responseData;


        // Check mobile verification
        if (mobile_verified_at === null) {
          navigation.navigate('Mobile');
          return;
        }

        // Check Aadhar verification
        if (aadhar_verified_at === null) {
          navigation.navigate('Document');
          return;
        }

        // All verifications passed, navigate to the main screen
        navigation.navigate('MainLayout');
      }
      //   if(response.data.status === 200) {
      //     navigation.navigate('Mobile')
      //   }
      console.log('Response emailOtp:', response);
      // Handle the response or navigate to the next screen
    } catch (error) {
      console.error(error);
      // Handle error if needed
    }
  };

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#d6e4f2'}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}>
        <Image source={icons.mail} style={{width: 150, height: 150}} />
      </View>

      {/* <View style={{marginTop: 10, alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 25,
            color: '#000',
            textDecorationLine: 'underline',
          }}>
          Email Verification
        </Text>
      </View> */}
      <View>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            marginTop: 30,
            alignSelf: 'center',
            fontWeight:'600'
          }}>
        
          OTP Verification
        </Text>
      </View>
      <View
        style={{
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal:10,
        }}>
        <Text
          style={{
            fontSize: 20,
            // paddingLeft: 20,
            marginTop: 20,
           paddingHorizontal:5,
            alignSelf: 'center',
            alignItems:'center',
            fontWeight: '200',
            color:'#000'
          }}
          numberOfLines={2}>
          Please Enter the 6 digit code send to your email address
        </Text>
      </View>

      <View
        style={{
         marginHorizontal:10,
          marginTop: 20,
          width: 320,
          height: 70,
        }}>
        <TextInput
          style={{
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: '#757575',
            marginLeft: 10,
            paddingHorizontal: 10,
            color:'#000'
          }}
          placeholder="Enter your valid OTP"
          placeholderTextColor='#000'
          value={emailOtp}
          onChangeText={text => setEmailOtp(text)}
        />
        <View>
          <TouchableOpacity onPress={handleGetOTPVerification}>
            <View
              style={{
                width: 100,
                height: 30,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: '#757575',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                alignSelf: 'center',
                backgroundColor: '#ACC8E5',
                marginLeft: 220,
              }}>
              <Text style={{fontSize: 11, color: '#000'}}>RESEND OTP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleGetOTPVerification}>
        <View
          style={{
            width: 320,
            height: 50,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: '#757575',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
            alignSelf: 'center',
            backgroundColor: '#ACC8E5',
          }}>
          <Text style={{fontSize: 15, color: '#000'}}>SUBMIT OTP</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button1;
