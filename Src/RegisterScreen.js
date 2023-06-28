import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';
import Lottie from 'lottie-react-native';

import InputField from '../components2/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components2/CustomButton';
import { COLORS } from '../constants';
// import { postData } from '../constants/hooks/ApiHelper';
import { useNavigation } from '@react-navigation/native';
import { postData2 } from '../constants/hooks/ApiHelper';
const baseUrl = "https://scripts.bulleyetrade.com/api/signup";

const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');
  
  const [formData, setFormData] = useState({
    txtFirstName: '',
    txtLastName: '',
    txtMobile: '',
    email: '',
    password: '',
    confirm_password: '',
    walletPin: '',
  });

  const { txtFirstName, txtLastName, txtMobile, email, password, confirm_password, walletPin } = formData;

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const UserRegister = async() =>{
    const payload = {
      txtFirstName,
      txtLastName,
      txtMobile,
      email,
      password,
      confirm_password,
      walletPin,
    };
    console.log("payload", payload);
    try {
      const res = await postData2(baseUrl,payload)
      if(res.data.status==201){
        navigation.navigate("Login") 
       }
       
      
      
    } catch (error) {
      console.error(error);
      
    }
  }


  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: COLORS.mainBgColor,}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
        <Lottie source={require('../assets/register.json')} autoPlay loop  style={{ width: 120, height: 120 }}  />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 20,
            fontWeight: '500',
            color: '#333',
            marginBottom: 20,
          }}>
          Register
        </Text>

        

        <InputField
          label={'First Name'}
          value={txtFirstName}
          onChangeText={(value) => handleInputChange('txtFirstName', value)}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

<InputField
          label={'Last Name'}
          value={txtLastName}
          onChangeText={(value) => handleInputChange('txtLastName', value)}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />
        <InputField
          label={'Mobile Number'}
          value={txtMobile}
          onChangeText={(value) => handleInputChange('txtMobile', value)}
          icon={
            <FontAwesome5
              name="mobile-alt"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />




        <InputField
          label={'Email ID'}
          value={email}
          onChangeText={(value) => handleInputChange('email', value)}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          value={password}
          onChangeText={(value) => handleInputChange('password', value)}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />

        <InputField
          label={'Confirm Password'}
          value={confirm_password}
          onChangeText={(value) => handleInputChange('confirm_password', value)}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />
         <InputField
          label={'wallet Pin'}
          value={walletPin}
          onChangeText={(value) => handleInputChange('walletPin', value)}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        {/* <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}

        <CustomButton label={'Register'} onPress={UserRegister} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Text style={{color:'#000'}}>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#f6b248', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
