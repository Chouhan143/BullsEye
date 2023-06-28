import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SIZES, COLORS, icons, } from '../../constants';


const UserProfile = (onPress) => {


    return (
        <ScrollView style={{ backgroundColor: COLORS.mainBgColor }}>
            <View style={{ flex:1,}}>

                <View style={{ backgroundColor: COLORS.mainBgColor, marginTop: 10 }}>
                    <View style={{
                        height: 130, backgroundColor: COLORS.bgColor, width: '95%', justifyContent: 'space-between',
                        borderBottomWidth: 0.3, borderBottomColor: COLORS.lightGray3, alignSelf: 'center', flexDirection: 'row', borderRadius: 10
                    }}>
                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontSize: 25, marginLeft: 15, }}>kapil kachhawa</Text>
                            <Text style={{ fontSize: 15, marginLeft: 15 }}>kas25014</Text>

                        </View>

                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                marginTop: 20,
                                marginRight: 50
                            }}>
                            <Image
                                source={icons.profile}
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderWidth: 1,
                                    borderColor: '#000',
                                    borderRadius: 50,
                                }}
                            />
                            <View
                                style={{
                                    width: 30,
                                    height: 12,
                                    backgroundColor: 'red',
                                    position: 'absolute',
                                    right: -20,
                                    top: 40,
                                    borderRadius: 15,
                                }}>
                                <TouchableOpacity>
                                    <Text style={{ color: '#fff', fontSize: 9, alignSelf: 'center' }}>
                                        Edit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    paddingLeft: 20, paddingRight: 20, marginTop: 30
                }}>
                    <Text style={{ fontSize: 17 }}>
                        Password
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17, color: 'blue' }}>
                            change
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 40,
                    paddingLeft: 20, paddingRight: 20
                }}>
                    <Text>E-mail</Text>
                    <Text>kk12345@gmail.com</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 40,
                    paddingLeft: 20, paddingRight: 20
                }}>
                    <Text>Phone</Text>
                    <Text>88*59****5325.com</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 40,
                    paddingLeft: 20, paddingRight: 20
                }}>
                    <Text>PAN</Text>
                    <Text>kwd**47de**</Text>
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
