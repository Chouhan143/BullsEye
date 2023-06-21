import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SIZES, COLORS, icons, } from '../../constants';


const UserProfile = (onPress) => {
    const UserRow = ({ title, value, onPress }) => {
        return (
            <View style={{
                flexDirection: 'row', marginTop: SIZES.radius,
                height: 60, justifyContent: 'space-between', backgroundColor: '#EBEBEB', alignItems: 'center'
            }}>
                <Text style={{ marginLeft: 20 }}>{title}</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: '#2980B9', marginRight: 20 }}>{value} </Text>
                </TouchableOpacity>

            </View>



        )
    }
    const UserRow1 = ({ title, value, onPress }) => {
        return (
            <View style={{
                flexDirection: 'row', marginTop: SIZES.radius,
                justifyContent: 'space-between', backgroundColor: '', alignItems: 'center'
            }}>
                <Text style={{ marginLeft: 20 }}>{title}</Text>
                <Text style={{ marginRight: 20 }} >{value}{onPress}</Text>

            </View>



        )
    }
    return (
        <ScrollView>
            <>
                <View>
                    <View style={{
                        height: 120, backgroundColor: 'white', width: '100%', position: 'absolute', justifyContent: 'space-between',
                        borderBottomWidth: 0.3, borderBottomColor: COLORS.lightGray3, alignSelf: 'center', flexDirection: 'row'
                    }}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 25, marginLeft: 15, }}> User</Text>
                            <Text style={{ fontSize: 15, marginLeft: 15 }}>kas25014</Text>

                        </View>
                        {/* <View style={{ borderWidth: 0.5, borderColor: 'black', borderRadius: 200, width: 80, height: 80 }}>
                            <Image source={icons.profile} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                            <TouchableOpacity
                            >
                                <View style={{
                                    justifyContent: 'center', marginRight: 500, alignItems: 'center',
                                    borderWidth: 0.5, borderColor: 'black', borderRadius: 200, width: 20, height: 20,
                                    backgroundColor: 'blue',
                                }}>
                                    <Image source={icons.plus} style={{ width: 15, height: 15, alignSelf: 'center', tintColor: 'white' }} />
                                </View>
                            </TouchableOpacity>

                        </View> */}
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                marginTop: 10,
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
                            <Text style={{ color: '#fff', paddingVertical: 10 }}>Silver</Text>
                        </View>

                    </View>

                </View>
                <View style={{ marginTop: 120 }}>
                    <UserRow title={"Passward & Security"} value={"Manage"} />

                </View>


                <View style={{ marginTop: 20, }}>
                    <UserRow1 title={"E-Mail"} value={"demo@gmail.com"} />
                    <UserRow1 title={"Phone"} value={"***251246"} />
                    <UserRow1 title={"PAN"} value={"**595kj"} />
                    <UserRow1 title={"Demat (BO)"} value={"0000000245154"} />
                    <View style={{ marginLeft: 20, marginTop: 20, }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, color: '#2980B9' }}>Manage Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <Text style={{ marginTop: 20, marginLeft: 20, color: "#000" }} >Bank ACCOUNT</Text>
                    <UserRow1 title={"SBI"} value={"*5578589****"} />
                </View>
                <View >
                    <UserRow title={"Sagement"} value={"Mcx,gold,Silver,Copper"} />
                    <UserRow title={"Demat Authorisation"} value={"POA"} />


                </View>
                <View >
                    <Text style={{ marginTop: 30, marginLeft: 20, color: "#000" }} >Account closure </Text>
                    <Text style={{ marginTop: 20, marginLeft: 20, }} >lorem20 the cat is very beuatyfull and i dont like wine </Text>

                    <View style={{ marginLeft: 20, marginTop: 40, }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, color: '#2980B9' }}>Continue</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </>
        </ScrollView>
    )

}

export default UserProfile;