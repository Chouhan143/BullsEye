import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ScrollView } from 'react-native-gesture-handler';

// import OTPInputView from '@twotalltotems/react-native-otp-input';
const ForgotPasswordSet = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const SignupSchema = Yup.object().shape({

        // txtFirstName: Yup.string()
        //     .min(4, 'Too Short!')
        //     .max(50, 'Too Long!')
        //     .required('Please enter your first name'),
        // txtLastName: Yup.string()
        //     .min(4, 'Too Short!')
        //     .max(50, 'Too Long!')
        //     .required('Please enter your last name'),
        // email: Yup.string()
        //     .email('Invalid email')
        //     .required('Email is required'),
        // txtMobile: Yup.string()
        //     .min(10, 'Must be Exactly 10 digit')
        //     .max(10, 'Must be Exactly 10 digit')
        //     .required('Please enter your Mobile'),
        Oldpassword: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        Newpassword: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        confirm_password: Yup.string()
            .min(8, "Confirm Passward must be 8 characters long")
            .oneOf([Yup.ref('password')], "Your Passward do not match.")
            .required("Confirm passward is required"),
        // walletPin: Yup.string()
        //     .min(4, "please enter at least 4 digit pin")
        //     .max(6)
        //     .required('please enter Valid pin')
    });


    return (

        <Formik initialValues={{

            Oldpassword: '',
            Newpassword: '',
            confirm_password: '',

        }}
            validationSchema={SignupSchema}
        // onSubmit={}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
                <ScrollView style={{ flex: 1, backgroundColor: COLORS.mainBgColor, }}>
                    <View style={{ paddingHorizontal: responsiveWidth(5), paddingTop: responsiveHeight(2) }}>
                        <View style={{ marginVertical: responsiveHeight(2), display: 'flex', justifyContent: 'flex-start', }}>
                            <View style={{ marginVertical: responsiveHeight(5) }}>
                                <Image source={require('../assets/Image/password.png')} style={{ width: responsiveWidth(12), height: responsiveHeight(6) }} />
                            </View>


                            <View>
                                <Text style={{ color: COLORS.black, fontSize: responsiveFontSize(2.2), fontWeight: '600' }}>
                                    Set New Password
                                </Text>
                                <Text style={{ color: 'gray', marginTop: responsiveHeight(1.5) }}>
                                    Must be at least 8 characters.
                                </Text>

                                <View>
                                    <Text style={{ color: COLORS.black, marginTop: responsiveHeight(4) }}>
                                        Old Password
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
                                            color: '#000'
                                        }}
                                        value={values.Oldpassword}
                                        onChangeText={handleChange("Oldpassword")}
                                        onBlur={handleBlur("Oldpassword")}
                                        error={touched.Oldpassword && errors.Oldpassword}
                                    />
                                    {errors.Oldpassword && (
                                        <Text style={{ color: 'red', marginBottom: responsiveHeight(5), paddingLeft: responsiveWidth(5), paddingBottom: responsiveHeight(1) }}>
                                            {errors.Oldpassword}
                                        </Text>
                                    )}
                                    <Text style={{ color: COLORS.black, marginTop: responsiveHeight(4) }}>
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
                                            color: '#000'
                                        }}
                                        value={values.Newpassword}
                                        onChangeText={handleChange("Newpassword")}
                                        onBlur={handleBlur("Newpassword")}
                                        error={touched.Newpassword && errors.Newpassword}
                                    />
                                    {errors.Newpassword && (
                                        <Text style={{ color: 'red', marginBottom: responsiveHeight(5), paddingLeft: responsiveWidth(5), paddingBottom: responsiveHeight(1) }}>
                                            {errors.Newpassword}
                                        </Text>
                                    )}

                                    <Text style={{ color: COLORS.black, marginTop: responsiveHeight(4) }}>
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
                                            color: '#000'
                                        }}
                                        value={values.confirm_password}
                                        onChangeText={handleChange("confirm_password")}
                                        onBlur={handleBlur("confirm_password")}
                                        error={touched.confirm_password && errors.confirm_password}
                                    />
                                    {errors.confirm_password && (
                                        <Text style={{ color: 'red', marginBottom: responsiveHeight(5), paddingLeft: responsiveWidth(5), paddingBottom: responsiveHeight(1) }}>
                                            {errors.confirm_password}
                                        </Text>
                                    )}


                                </View>


                                <TouchableOpacity

                                    onPress={handleSubmit}

                                    style={{
                                        backgroundColor: COLORS.TopBox,
                                        padding: responsiveWidth(3),
                                        borderRadius: responsiveWidth(1),
                                        marginVertical: responsiveHeight(4)
                                    }}>

                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontWeight: '700',
                                            fontSize: responsiveFontSize(2.5),
                                            color: '#fff',
                                        }}>
                                        Reset Password
                                    </Text>
                                </TouchableOpacity>





                            </View>
                        </View>
                    </View>
                </ScrollView>
            )}
        </Formik>
    )
}

export default ForgotPasswordSet

const styles = StyleSheet.create({})