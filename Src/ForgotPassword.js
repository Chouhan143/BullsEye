import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';


const ForgotPassword = () => {
    const navigation = useNavigation();

    const SignupSchema = Yup.object().shape({


        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),

    });



    return (

        <Formik initialValues={{
            email: '',
        }}
            validationSchema={SignupSchema}>

            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
                <View style={{ flex: 1, backgroundColor: COLORS.mainBgColor, paddingHorizontal: responsiveWidth(5), paddingTop: responsiveHeight(7) }}>
                    <View style={{ marginVertical: responsiveHeight(2), display: 'flex', justifyContent: 'flex-start', }}>
                        <View style={{ marginVertical: responsiveHeight(5) }}>
                            <Image source={require('../assets/Image/touch.png')} style={{ width: responsiveWidth(10), height: responsiveHeight(5) }} />
                        </View>


                        <View>
                            <Text style={{ color: COLORS.black, fontSize: responsiveFontSize(2.2), fontWeight: '600' }}>
                                Forgot Passward
                            </Text>
                            <Text style={{ color: 'gray', marginTop: responsiveHeight(1.5) }}>
                                No worries, we'll send you reset instructions.
                            </Text>
                            <TextInput
                                placeholder="Email"
                                // value={amount}
                                // onChangeText={setAmount}

                                placeholderTextColor={'gray'}
                                style={{
                                    // backgroundColor: COLORS.bgColor,
                                    width: responsiveWidth(80),
                                    borderBottomColor: COLORS.TopBox,
                                    borderBottomWidth: 1,
                                    // borderRadius: responsiveWidth(1.2),
                                    marginTop: responsiveHeight(1.5),
                                    marginHorizontal: responsiveWidth(2),
                                    fontSize: responsiveFontSize(2.2),
                                    // paddingLeft: responsiveWidth(3),
                                    color: '#000'
                                }}
                                value={values.email}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur('email')}
                                error={touched.email && errors.email}
                            />
                            {errors.email && (
                                <Text style={{ color: 'red', marginBottom: responsiveHeight(5), paddingLeft: responsiveWidth(5), paddingBottom: responsiveHeight(1) }}>
                                    {errors.email}
                                </Text>
                            )}

                            <TouchableOpacity
                                onPress={() => navigation.navigate('ForgetPasswordOtp')}
                                style={{
                                    backgroundColor: COLORS.TopBox,
                                    padding: responsiveWidth(3),
                                    borderRadius: responsiveWidth(1),
                                    marginVertical: responsiveHeight(7)
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


                            <TouchableOpacity
                                onPress={() => { navigation.navigate('login') }}
                            >


                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        fontSize: responsiveFontSize(2.1),
                                        color: '#000',
                                    }}>
                                    <Icon name="arrowleft" size={20} color="#000" />   Back to log in
                                </Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </View>
            )}
        </Formik>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})