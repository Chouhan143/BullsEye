import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect,useState } from 'react'
import { SIZES, COLORS, icons, } from '../../constants';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import AsyncStorage from '@react-native-async-storage/async-storage';

// all pages responsive

const UserProfile = (onPress) => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [fName, setFname] = useState('');
    const [lName, setlname] = useState('');

    const getStoredData = async () => {
        try {
          const storedEmail  = await AsyncStorage.getItem('email');
          setEmail(storedEmail || '');
          const storeMobile = await AsyncStorage.getItem('mobile');
          setMobile(storeMobile || '');

          const first_name = await AsyncStorage.getItem('first_name');
          setFname(first_name || '')

          const last_name = await AsyncStorage.getItem('last_name');
          setlname(last_name || '')
          
          // Do something with the retrieved values (e.g., store them in component state)
          // ...
        } catch (error) {
          console.error(error);
        }
      };

      
      useEffect(() => {
        getStoredData();
      }, []);



    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.mainBgColor }}>
            <View style={{paddingHorizontal:responsiveWidth(1)}}>
                <Text style={{ color: 'black', fontSize: responsiveFontSize(3.5), paddingLeft: responsiveWidth(3) }}>UserProfile</Text>

                <View style={{ backgroundColor: COLORS.mainBgColor, marginTop: responsiveHeight(2) }}>
                    <View style={{
                        height: responsiveWidth(30), backgroundColor: COLORS.bgColor, width: responsiveWidth(93),
                        justifyContent: 'space-between',
                        borderBottomWidth: 0.3, borderBottomColor: COLORS.lightGray3, alignSelf: 'center',
                        flexDirection: 'row', borderRadius: responsiveWidth(2)
                    }}>
                        <View style={{ marginTop: responsiveHeight(3) }}>
                            <Text style={{ fontSize: responsiveFontSize(3), marginLeft: responsiveWidth(4), }}>{fName + ' ' + lName}</Text>
                            {/* <Text style={{ fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(4), }}>kas25014</Text> */}

                        </View>

                        <View
                            style={{
                                width: responsiveWidth(15),
                                height: responsiveWidth(15),
                                borderRadius: responsiveWidth(2),
                                marginTop: responsiveHeight(2),
                                marginRight: responsiveWidth(10),
                            }}>
                            <Image
                                source={icons.profile}
                                style={{
                                    width: responsiveWidth(20),
                                    height: responsiveWidth(20),
                                    borderWidth: 0.5,
                                    borderColor: '#000',
                                    borderRadius: responsiveWidth(10),
                                }}
                            />
                            <View
                                style={{
                                    width: responsiveWidth(8),
                                    height: responsiveWidth(4),
                                    backgroundColor: 'red',
                                    position: 'absolute',
                                    right: responsiveWidth(-5),
                                    top: responsiveHeight(5),
                                    borderRadius: responsiveWidth(2),
                                }}>
                                <TouchableOpacity>
                                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.3), alignSelf: 'center' }}>
                                        Edit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    paddingLeft:responsiveWidth(3), paddingRight: responsiveWidth(3), marginTop: responsiveHeight(4)
                }}>
                    <Text style={{ fontSize: responsiveFontSize(2.5) }}>
                        Password
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: responsiveFontSize(2.5), color: 'blue' }}>
                            change
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 40,
                    paddingLeft: 20, paddingRight: 20
                }}>
                    <Text>E-mail</Text>
                    <Text>{email}</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 40,
                    paddingLeft: 20, paddingRight: 20
                }}>
                    <Text>Phone</Text>
                    <Text>{mobile}</Text>
                </View>
            
                <View style={{ margin: 20, }}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 15 }}>Bank Account</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text>ICICI</Text>
                        <Text>12454***45***58**</Text>
                    </View>
                </View>





            </View>
        </ScrollView>
    )

}

export default UserProfile;
