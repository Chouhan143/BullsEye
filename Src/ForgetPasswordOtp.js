import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';

// import OTPInputView from '@twotalltotems/react-native-otp-input';
const ForgetPasswordOtp = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const [otpNumber, setotpNumber] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.mainBgColor, paddingHorizontal: responsiveWidth(5), paddingTop: responsiveHeight(7) }}>
            <View style={{ marginVertical: responsiveHeight(2), display: 'flex', justifyContent: 'flex-start', }}>
                <View style={{ marginVertical: responsiveHeight(5) }}>
                    <Image source={require('../assets/Image/email.png')} style={{ width: responsiveWidth(10), height: responsiveHeight(5) }} />
                </View>


                <View>
                    <Text style={{ color: COLORS.black, fontSize: responsiveFontSize(2.2), fontWeight: '600' }}>
                        Password Reset
                    </Text>
                    <Text style={{ color: 'gray', marginTop: responsiveHeight(1.5) }}>
                        we sent a code to .
                    </Text>


                    <TouchableOpacity
    onPress={()=>navigation.navigate('ForgotPasswordSet')}
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
                            Continue
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginBottom: responsiveHeight(3), display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.gray }}>Dont't recieve the email? </Text>
                        <TouchableOpacity><Text style={{ color: COLORS.black, fontWeight: '800' }}>Click to resend</Text></TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={handleGoBack}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: '500',
                                fontSize: responsiveFontSize(2.1),
                                color: '#000',
                            }}>
                            <Icon name="arrowleft" size={20} color="#000" />     Back to log in
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
        </View>
    )
}

export default ForgetPasswordOtp

const styles = StyleSheet.create({})