import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';

// import OTPInputView from '@twotalltotems/react-native-otp-input';
const ForgotPasswordSet = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.mainBgColor, paddingHorizontal: responsiveWidth(5), paddingTop: responsiveHeight(7) }}>
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
                            Password
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
                        />

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
                        />


                    </View>


                    <TouchableOpacity

                    onPress={()=>navigation.navigate('ForgotPasswordDone')}

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

export default ForgotPasswordSet

const styles = StyleSheet.create({})