import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Switch, title, onPress } from 'react-native';
import { MainLayout } from './';
import { HeaderBar } from "../components"
import { FONTS, COLORS, SIZES, dummyData, icons } from "../constants";
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation, } from '@react-navigation/native';



const SectionTitle = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: SIZES.padding }}>
      <Text style={{
        color: COLORS.lightGray3, ...FONTS.h4
      }}>{title}</Text>
    </View>
  )
}



const Profile = (props) => {
  const [faceId, SetFaceId] = useState(true)


  return (

    <MainLayout>

      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,

        }}>
        {/* Header  */}
        <Text style={{ color: 'black', ...FONTS.largeTitle }}>Account</Text>

        {/* Details  */}
        <ScrollView
          showsVerticalScrollIndicator={false}>

          {/* Email and user ID  */}
          <View
            style={{
              flexDirection: "row",

              marginTop: SIZES.radius,

              borderRadius: SIZES.radius,
              elevation: 5, borderWidth: 0.5, borderColor: 'white',
              backgroundColor: 'white',
              height: 100, width: "100%",
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            {/* Email and ID  */}
            <View style={{
              flex: 1,
              marginLeft: 10,
              marginBottom: 40

            }}>
              <Text
                style={{ color: COLORS.black, ...FONTS.h3 }}
              >{dummyData.profile.email}</Text>
              <Text style={{
                color: COLORS.lightGray2, ...FONTS.body4
              }}>ID :{dummyData.profile.id}</Text>
            </View>
            {/* STATUS  */}
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 7
            }}
            >
              <Image
                source={icons.verified}
                style={{ width: 25, height: 25 }}
              />
              <Text style={{
                marginLeft: SIZES.base,
                color: COLORS.lightGreen, ...FONTS.body4
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

          <View style={{
            flex: 1, justifyContent: 'space-between',
            flexDirection: "row", marginTop: SIZES.radius,
            borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
            alignItems: 'center'
          }}>
            <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
              App Code
            </Text>
            <Image source={icons.lock}
              style={{ height: 25, width: 25, tintColor: "#B1C3BB" }} />
          </View>

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
          <View style={{
            flex: 1, justifyContent: 'space-between',
            flexDirection: "row", marginTop: SIZES.radius,
            borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
            alignItems: 'center'
          }}>
            <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
              Connected Apps
            </Text>
            <Image source={icons.box}
              style={{ height: 25, width: 25, tintColor: "#B1C3BB" }} />
          </View>
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
          <SectionTitle title="SUPPORT" />

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
          <View style={{
            flex: 1, justifyContent: 'space-between',
            flexDirection: "row", marginTop: SIZES.radius,
            borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
            alignItems: 'center'
          }}>
            <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
              User manual
            </Text>
            <Image source={icons.usermanual}
              style={{ height: 25, width: 25, tintColor: "#B1C3BB" }} />
          </View>
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
          <SectionTitle title="OTHER" />
          <View style={{
            flex: 1, justifyContent: 'space-between',
            flexDirection: "row", marginTop: SIZES.radius,
            borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
            alignItems: 'center'
          }}>
            <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
              Invited friends
            </Text>
            <Image source={icons.Adduser}
              style={{ height: 25, width: 25, tintColor: "#B1C3BB" }} />
          </View>
          <View style={{
            flex: 1, justifyContent: 'space-between',
            flexDirection: "row", marginTop: SIZES.radius,
            borderBottomWidth: 0.8, height: 50, borderBottomColor: '#D6EDF0',
            alignItems: 'center'
          }}>
            <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
              Licenses
            </Text>
            <Image source={icons.licenses}
              style={{ height: 25, width: 25, tintColor: "#B1C3BB" }} />
          </View>






        </ScrollView>

      </View>
    </MainLayout>
  );
};

export default Profile;