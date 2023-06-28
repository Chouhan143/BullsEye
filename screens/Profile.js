import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Switch, title, onPress, Alert } from 'react-native';
import { MainLayout } from './';
import { HeaderBar } from "../components"
import { FONTS, COLORS, SIZES, dummyData, icons } from "../constants";
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation, } from '@react-navigation/native';


const navigation = useNavigation();
const SectionTitle = ({ title }) => {
  
  return (
    <View style={{ marginTop: SIZES.padding }}>
      <Text style={{
        color: COLORS.lightGray3, ...FONTS.h4
      }}>{title}</Text>
    </View>
  )
}
const HandleLogout = () => {
  Alert.alert("Logout!", "Are you sure you want to Logout?", [
    {
      text: 'Cencal',
      // onPress: () = {},
    },
    {
      text: 'OK',
      // onPress: () = {},
    },
  ])

}


const Profile = (props) => {
  const [faceId, SetFaceId] = useState(true)


  return (

    <MainLayout>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          backgroundColor: COLORS.mainBgColor,

        }}>
        {/* Header  */}
        <Text style={{ color: 'black', fontSize: 30, }}>Account</Text>

        {/* Details  */}
        <ScrollView
          showsVerticalScrollIndicator={false}>

          {/* Email and user ID  */}
          <View
            style={{
              flexDirection: "row",

              marginTop: SIZES.radius,

              borderRadius: SIZES.radius,
              elevation: 5, borderWidth: 0.5, borderColor: "white",
              backgroundColor: COLORS.bgColor,
              height: 100, width: "100%",
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            {/* Email and ID  */}
            <View style={{
              flex: 1,
              marginLeft: 10,
              flexDirection: 'row'
              // marginBottom: 40

            }}>
              <Image
                source={icons.profile}
                style={{ width: 45, height: 45, }}
              />
              <Text
                style={{ color: COLORS.black, ...FONTS.h3, marginTop: 10 }}
              >{dummyData.profile.email}</Text>
              {/* <Text style={{
                color: COLORS.lightGray2, ...FONTS.body4
              }}>ID :{dummyData.profile.id}</Text> */}
            </View>
            {/* STATUS  */}
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 15
            }}
            >
              <Image
                source={icons.verified}
                style={{ width: 25, height: 25, }}
              />
              <Text style={{
                marginLeft: SIZES.base,
                color: "#013220", ...FONTS.body4
              }}>Verified</Text>

            </View>
          </View>


          <SectionTitle title="ACCOUNT" />

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Funds")} >
            <View style={{
              flex: 1, justifyContent: 'space-between',
              flexDirection: "row", marginTop: SIZES.radius,
              borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
              alignItems: 'center'
            }}>
              <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
                Funds
              </Text>
              <Image source={icons.funds}
                style={{ height: 20, width: 20, tintColor: "#B1C3BB" }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("UserProfile")}>
            <View style={{
              flex: 1, justifyContent: 'space-between',
              flexDirection: "row", marginTop: SIZES.radius,
              borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
              alignItems: 'center'
            }}>
              <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
                Profile
              </Text>
              <Image source={icons.profile}
                style={{ height: 25, width: 25, tintColor: "#B1C3BB" }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Setting")}>
            <View style={{
              flex: 1, justifyContent: 'space-between',
              flexDirection: "row", marginTop: SIZES.radius,
              borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',

              alignItems: 'center'
            }}>
              <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
                Setting
              </Text>
              <Image source={icons.setting}
                style={{ height: 25, width: 25, tintColor: "#B1C3BB" }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate(HandleLogout())}>
            <View style={{
              flex: 1, justifyContent: 'space-between',
              flexDirection: "row", marginTop: SIZES.radius,
              borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
              alignItems: 'center'
            }}>
              <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
                Logout
              </Text>
              <Image source={icons.logout}
                style={{ height: 25, width: 25, tintColor: "#B1C3BB" }} />
            </View>
          </TouchableOpacity>
          <SectionTitle title="SUPPORT" />

          <TouchableOpacity 
          onPress={() => props.navigation.navigate("Button1")}>
            <View style={{
              flex: 1, justifyContent: 'space-between',
              flexDirection: "row", marginTop: SIZES.radius,
              borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
              alignItems: 'center'
            }}>
              <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
                Support portal
              </Text>
              <Image source={icons.customersupport}
                style={{ height: 25, width: 25, tintColor: "#B1C3BB" }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("BuySrceen")}>
            <View style={{
              flex: 1, justifyContent: 'space-between',
              flexDirection: "row", marginTop: SIZES.radius,
              borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
              alignItems: 'center'
            }}>
              <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
                Contact
              </Text>
              <Image source={icons.contect}
                style={{ height: 30, width: 30, tintColor: "#B1C3BB" }} />
            </View>
          </TouchableOpacity>

        </ScrollView>

      </View>
    </MainLayout>
  );
};

export default Profile;
