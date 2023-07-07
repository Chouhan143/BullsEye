import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { postData } from '../../constants/hooks/ApiHelper';
import { icons } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';

const EmailVerification = ({ route }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (route.params?.email) {
      setEmail(route.params.email);
    }
  }, [route.params?.email]);

  const handleGetOTP = async () => {
    try {
      const payload = { email: email };
      const response = await postData(
        'https://panel.bulleyetrade.com/api/mobile/email-verify',
        payload
      );

      if(response.data.status === 200) {
        navigation.navigate('Email2')
      }
      // console.log('Response:', response.data);
      // Handle the response or navigate to the next screen
    } catch (error) {
      console.error(error);
      // Handle error if needed
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#d6e4f2' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
        <Image source={icons.mail} style={{ width: 150, height: 150 }} />
      </View>

      <View style={{ marginTop: 10, alignSelf: 'center' }}>
        <Text style={{ fontSize: 25, color: '#000', textDecorationLine: 'underline' }}>Email Verification</Text>
      </View>

      <View>
        <Text style={{ fontSize: 20, color: '#000', paddingLeft: 20, marginTop: 50 }}>Verification code on your Email ID</Text>
      </View>

      <View style={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, paddingLeft: 20, marginTop: 20, alignSelf: 'center', fontWeight: '200',color:'#000' }} numberOfLines={2}>
          We will send the verification code to this Email ID
        </Text>
      </View>

      <View style={{ marginLeft: 10, marginTop: 30, width: 320, height: 70 }}>
        <TextInput
          style={{
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: '#757575',
            marginLeft: 10,
            paddingHorizontal: 10,
            color:"#000"
          }}
          placeholder="Enter your valid Email ID"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <TouchableOpacity onPress={handleGetOTP}>
        <View
          style={{
            width: 320,
            height: 50,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: '#757575',
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
    </ScrollView>
  );
};

export default EmailVerification;
