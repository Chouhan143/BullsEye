import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components2/CustomButton';
import InputField from '../components2/InputField';
import { COLORS } from '../constants';
import Lottie from 'lottie-react-native';
import axios from 'axios';
import { postData } from '../constants/hooks/ApiHelper';
import { useNavigation } from '@react-navigation/native';


const baseUrl = "https://scripts.bulleyetrade.com/api/signin";


const LoginScreen = () => {
  const navigation = useNavigation();
  // const [inputs,setInputs]=useState({email:'',password:''})
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
 
 



  const login = async () => {
    const payload = {
      email: email,
      password: password,
    }
    try {
      const res = await postData(baseUrl, payload)
      const accessToken = res.data.payload.access_token;
      await AsyncStorage.setItem('accessToken', accessToken);
      if (res.status == 200) {
        navigation.navigate('MainLayout')
      }

    } catch (error) {
      console.error(error);

    }
  }




  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.mainBgColor,
      }}
    >
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          {/* <Image source={require('../assets/Image/logo.png')} style={{width:'80%',height:70,marginBottom:30}} /> */}
          <Lottie
            source={require('../assets/loginlogo.json')}
            autoPlay
            loop
            style={{ width: 100, height: 100 }}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '600',
            color: '#333',
            marginBottom: 30,
            marginTop: 20,
          }}
        >
          Login
        </Text>

        <InputField
          label={'Email ID'}
          labelStyle={{ color: 'red' }}
          placeholderTextColor="#000"
          value={email}
          onChangeText={(text) => setEmail(text)}
          error={errors.email}
          // onBlur={validateForm}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputStyle={{ color: 'blue' }}
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          error={errors.password}
          // onBlur={validateForm}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => { }}
        />

        <CustomButton label={'Login'} onPress={login} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <Text style={{ color: COLORS.textColor }}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: '#f6b248', fontWeight: '700' }}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen; 
