import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Lottie from 'lottie-react-native';
import { postData } from '../constants/hooks/ApiHelper';
import { COLORS } from '../constants';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CustomButton from '../components2/CustomButton';
import InputField from '../components2/InputField';

const baseUrl = 'https://scripts.bulleyetrade.com/api/signin';

const LoginScreen = () => {
  const navigation = useNavigation();

  const login = async (values) => {
    const { email, password } = values;

    const payload = {
      email: email,
      password: password,
    };

    try {
      const res = await postData(baseUrl, payload);
      const accessToken = res.data.payload.access_token;
      const id = res.data.payload.id;
      await AsyncStorage.setItem('accessToken', accessToken.toString());
      await AsyncStorage.setItem('id', id.toString());

      const { status, payload: responseData } = res.data;

      if (status === 200) {
        const { email_verified_at, mobile_verified_at, aadhar_verified_at } =
          responseData;

        // Check email verification
        if (email_verified_at === null) {
          navigation.navigate('email', { email: email });
          return;
        }

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
    } catch (error) {
      console.error(error);
    }
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
    // .matches(
    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    //   'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    // ),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => login(values)}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: COLORS.mainBgColor }}>
          <View style={{ paddingHorizontal: 25 }}>
            <View style={{ alignItems: 'center' }}>
              <Lottie
                source={require('../assets/loginlogo.json')}
                autoPlay
                loop
                style={{ width: responsiveWidth(30), height: responsiveWidth(30) }}
              />
            </View>

            <Text style={{
              fontFamily: 'Roboto-Medium',
              fontSize: responsiveFontSize(3.5),
              fontWeight: '600',
              color: '#333',
              marginBottom: responsiveHeight(3),
              marginTop: responsiveHeight(2),
            }}>
              Login
            </Text>

            <InputField
              label={'Email ID'}
              placeholderTextColor="#000"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
              icon={
                <MaterialIcons
                  name="alternate-email"
                  size={20}
                  color="#666"
                  style={{ marginRight: responsiveWidth(2) }}
                />
              }
              inputStyle={{ color: 'blue' }}
              keyboardType="email-address"
            />
            {touched.email && errors.email && (
              <Text style={{ color: 'red', marginBottom: responsiveHeight(5), paddingLeft: responsiveWidth(5), paddingBottom: responsiveHeight(1) }}>
                {errors.email}
              </Text>
            )}

            <InputField
              label={'Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: responsiveWidth(2) }}
                />
              }
              inputType="password"
              fieldButtonLabel={'Forgot?'}
              fieldButtonFunction={() => { }}
            />
            {touched.password && errors.password && (
              <Text style={{ color: 'red', marginBottom: responsiveHeight(5), paddingLeft: responsiveWidth(5), paddingBottom: responsiveHeight(1) }}>
                {errors.password}
              </Text>
            )}

            <CustomButton label={'Login'} onPress={handleSubmit} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: responsiveHeight(3) }}>
              <Text style={{ color: COLORS.textColor }}>New to the app?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: '#f6b248', fontWeight: '700' }}> Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default LoginScreen;
