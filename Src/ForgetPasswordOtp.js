import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../constants';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import OtpTextInpute from './OtpTextInpute';

// import OTPInputView from '@twotalltotems/react-native-otp-input';
const ForgetPasswordOtp = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const [otpNumber, setotpNumber] = useState('');
  const [email, setEmail] = useState('');

  const getStoredData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email1');
      setEmail(storedEmail || '');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStoredData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.mainBgColor,
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveHeight(1),
      }}>
      <View
        style={{
          marginVertical: responsiveHeight(2),
          display: 'flex',
          justifyContent: 'flex-start',
        }}>
        <View style={{marginVertical: responsiveHeight(5)}}>
          <Image
            source={require('../assets/Image/email.png')}
            style={{width: responsiveWidth(10), height: responsiveHeight(5)}}
          />
        </View>

        <View>
          <Text
            style={{
              color: COLORS.black,
              fontSize: responsiveFontSize(2.2),
              fontWeight: '600',
            }}>
            Password Reset
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: responsiveHeight(2),
            }}>
            <Text style={{color: 'gray'}}>we sent a code to.</Text>
            <Text
              style={{
                color: COLORS.black,
                fontSize: responsiveFontSize(1.7),
                fontWeight: '400',
              }}>
              {' '}
              {email}
            </Text>
          </View>

          {/* otpinpute ui  */}
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:responsiveHeight(5)}}>
          <OtpTextInpute />
          </View>
         

          <View>
            <Text style={{color: COLORS.black, marginTop: responsiveHeight(4)}}>
              New Password
            </Text>

            <TextInput
              // value={amount}
              // onChangeText={setAmount}
              secureTextEntry
              placeholderTextColor={'gray'}
              style={{
                width: responsiveWidth(88),
                borderBottomColor: COLORS.TopBox,
                borderBottomWidth: 0.3,
                marginHorizontal: responsiveWidth(1),
                fontSize: responsiveFontSize(2),
                color: '#000',
              }}
            />

            <Text style={{color: COLORS.black, marginTop: responsiveHeight(4)}}>
              Confirm Password
            </Text>

            <TextInput
              // value={amount}
              // onChangeText={setAmount}
              secureTextEntry
              placeholderTextColor={'gray'}
              style={{
                width: responsiveWidth(88),
                borderBottomColor: COLORS.TopBox,
                borderBottomWidth: 0.3,
                marginHorizontal: responsiveWidth(1),
                fontSize: responsiveFontSize(2),
                color: '#000',
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordSet')}
            style={{
              backgroundColor: COLORS.TopBox,
              padding: responsiveWidth(3),
              borderRadius: responsiveWidth(1),
              marginVertical: responsiveHeight(7),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: responsiveFontSize(2.5),
                color: '#fff',
              }}>
              Continue
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: responsiveHeight(3),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: COLORS.gray}}>Dont't recieve the email? </Text>
            <TouchableOpacity>
              <Text style={{color: COLORS.black, fontWeight: '800'}}>
                Click to resend
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleGoBack}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                fontSize: responsiveFontSize(2.1),
                color: '#000',
              }}>
              <Icon name="arrowleft" size={20} color="#000" /> Back to log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgetPasswordOtp;

const styles = StyleSheet.create({});
