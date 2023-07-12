import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ToastAndroid 
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useNavigation } from '@react-navigation/native';

import {
  COLORS,
  icons,
  SIZES,

} from '../../constants';
import { postData, postData3 } from '../../constants/hooks/ApiHelper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import axios from 'axios';

const Funds = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [amount, setAmount] = useState('');
  const [doc, setDoc] = useState(null);
  const [error, setError] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const navigation = useNavigation();

  const handleAddFunds = () => {
    setShowQRCode(true);
    setWithdraw(false);
    setDoc(null);
    setAmount('');
    setError('');
  };

  const handleWithdraw = () => {
    setShowQRCode(false);
    setWithdraw(true);
    setDoc(null);
    setAmount('');
    setError('');
  };


  const withdrawHandle = (text) => {
    setWithdrawAmount(text);
  }


  const SelectDOC = async () => {
    try {
      const selectedDoc = await DocumentPicker.pickSingle();
      const imageData = {
        uri: selectedDoc.uri,
        type: selectedDoc.type,
        name: selectedDoc.name || 'image.jpg',
      };
      console.log('image data', imageData);
      setDoc(imageData);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        setDoc(null); // Reset the doc state if document selection is canceled
        console.log('User cancelled the upload');
      } else {
        setDoc('Error selecting document'); // Set an error message in doc state if there's an error
        console.log(err);
      }
    }
  };

  const handleDocInputChange = (value) => {
    setDoc(value);
  };

  const handleDocumentSubmit = async () => {
    try {
      if (!doc) {
        setError('Please select a screenshot');
        return;
      }

      const formData = new FormData();
      formData.append('image_files', {
        uri: doc.uri,
        name: 'image_files.jpg',
        type: doc.type,
      });
      formData.append('amount', amount);

      const access_token = await AsyncStorage.getItem('accessToken');
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await postData3(
        'https://scripts.bulleyetrade.com/api/deposit',
        formData,
        config
      );

      console.log('Response:', response);
      // Handle the response as needed
      if (response.data.Status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Deposit request placed',
          position: 'bottom',
          bottomOffset: 400,
        });
        navigation.navigate('MainLayout');
      }
    } catch (error) {
      console.error(error);
    }
  };




  const withdrawApi = async () => {
    try {
      const access_token = await AsyncStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };

      const payload ={
        amount:withdrawAmount
      }
  
      console.log("payload", config);
      const res = await axios.post('https://scripts.bulleyetrade.com/api/withdraw', payload, config);
      if(res.data.Status === 200){
        ToastAndroid.show("Withdraw request placed", ToastAndroid.SHORT);
 
        setTimeout(()=>{
          navigation.navigate("MainLayout")
        },3000)

       
      }
  
      console.log("amount", res);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.mainBgColor,
        flex: 1,
      }}
    >
      <View
        style={{
          position: 'relative',
          width: responsiveWidth(94),
          height: responsiveHeight(12),
          backgroundColor: COLORS.bgColor,
          marginTop: responsiveHeight(2),
          marginLeft: SIZES.radius,
          borderRadius: SIZES.radius,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            marginTop: SIZES.radius,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(2), color: '#000' }}>
            Trading Balance
          </Text>
          <Text style={{ fontSize: responsiveFontSize(3), color: 'blue' }}>
            ₹ 10,000
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: responsiveWidth(6),
        }}
      >
        <TouchableOpacity
          style={{
            width: responsiveWidth(35),
            height: responsiveHeight(6),
            backgroundColor: '#52AD2D',
            borderRadius: responsiveWidth(2),
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginRight: responsiveWidth(5),
          }}
          onPress={handleAddFunds}
        >
          <Image
            source={icons.plus}
            style={{
              width: responsiveWidth(4),
              height: responsiveHeight(2),
              tintColor: '#fff',
            }}
          />
          <Text
            style={{
              marginLeft: responsiveWidth(4),
              color: COLORS.white,
              fontSize: responsiveFontSize(2),
            }}
          >
            Add Funds
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: responsiveWidth(35),
            height: responsiveHeight(6),
            backgroundColor: '#4D6BD5',
            borderRadius: responsiveWidth(2),
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={handleWithdraw}
        >
          <Image
            source={icons.withdraw}
            style={{
              width: responsiveWidth(4),
              height: responsiveHeight(2),
              tintColor: '#fff',
            }}
          />
          <Text
            style={{
              marginLeft: responsiveWidth(4),
              color: COLORS.white,
              fontSize: responsiveFontSize(2),
            }}
          >
            Withdraw
          </Text>
        </TouchableOpacity>
      </View>

      {showQRCode ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: responsiveHeight(3),
          }}
        >
          {/* Render QR code image here */}
          <Text
            style={{
              color: '#000',
              fontSize: responsiveFontSize(2),
              marginBottom: responsiveWidth(5),
            }}
          >

            Scan QR For Add Fund
          </Text>
          <Image
            source={require('../../assets/Image/QR.png')}
            style={{
              width: responsiveWidth(30),
              height: responsiveHeight(15),
              borderRadius: responsiveHeight(2),
              // tintColor: '#fff',
            }}
          />

          <View style={{ marginVertical: responsiveHeight(2) }}>
            {/* <View
              style={{
                backgroundColor: COLORS.bgColor,
                display: 'flex',
                justifyContent: 'center',
                width: responsiveWidth(35),
                height: responsiveHeight(4),
                borderRadius: 10,
                marginHorizontal: responsiveWidth(2),
              }}
            > */}
            <Text
              style={{
                color: '#000',
                fontSize: responsiveFontSize(1.7),
                fontWeight: '700',
                marginHorizontal: responsiveWidth(4),
              }}
            >
              Upload Screenshot
            </Text>
            {/* </View> */}
            <View
              style={{
                width: responsiveWidth(95),
                height: responsiveHeight(6),
                borderRadius: responsiveWidth(1),
                borderWidth: 0.5,
                borderColor: '#757575',
                marginTop: responsiveHeight(2),
                marginHorizontal: 10,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                alignSelf: 'center',
              }}
            >
              <TouchableOpacity onPress={SelectDOC}>
                <View
                  style={{
                    width: responsiveWidth(18),
                    height: responsiveWidth(7),
                    borderRadius: responsiveWidth(1),
                    borderWidth: 0.5,
                    borderColor: '#757575',
                    marginLeft: responsiveWidth(1.5),
                    marginTop: responsiveHeight(0.6),
                    backgroundColor: '#ACC8E5',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                >
                  <Text
                    style={{ color: '#000', fontSize: responsiveFontSize(2) }}
                  >
                    Select
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{ paddingHorizontal: 5 }}>
                <TextInput
                  value={doc ? doc.name : ''}
                  onChangeText={handleDocInputChange}
                  numberOfLines={2}
                  maxLength={15}
                  multiline={true}
                  style={{ color: doc ? 'black' : 'red' }}
                />
              </View>
            </View>
            {error ? (
              <Text
                style={{
                  fontSize: responsiveFontSize(1.6),
                  color: 'red',
                  margin: responsiveWidth(3),
                }}
              >
                {error}
              </Text>
            ) : null}

            {/* <View
              style={{
                backgroundColor: COLORS.bgColor,
                display: 'flex',
                justifyContent: 'center',
                width: responsiveWidth(30),
                height: responsiveHeight(4),
                borderRadius: 10,
                marginHorizontal: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
            > */}
            <Text
              style={{
                color: '#000',
                fontSize: responsiveFontSize(1.7),
                paddingHorizontal: responsiveWidth(4),
                marginTop: responsiveHeight(2),
                fontWeight: '700',
              }}
            >
              Enter Amount Here
            </Text>
            {/* </View> */}

            <TextInput
              placeholder="Enter Amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              placeholderTextColor={'gray'}
              style={{
                backgroundColor: COLORS.bgColor,
                width: responsiveWidth(95),
                borderRadius: responsiveWidth(1.2),
                marginTop: responsiveHeight(1.5),
                marginHorizontal: responsiveWidth(2),
                fontSize: responsiveFontSize(2.2),
                paddingLeft: responsiveWidth(3),
                color: '#000'
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: responsiveWidth(40),
              height: responsiveHeight(6),
              backgroundColor: 'blue',
              borderRadius: responsiveWidth(10),
              marginTop: responsiveHeight(1),
            }}
            onPress={handleDocumentSubmit}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: responsiveFontSize(2.2),
                fontWeight: '700',
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      ) : withdraw ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: responsiveHeight(12),
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: '500',
              color: '#000',
              marginVertical: responsiveHeight(2),
            }}
          >
            Enter Amount Here
          </Text>

          {/* </View> */}

          <TextInput
            placeholder="Enter Amount"
            value={withdrawAmount}
            onChangeText={withdrawHandle}
            keyboardType="numeric"
            placeholderTextColor={'gray'}
            style={{
              backgroundColor: COLORS.bgColor,
              width: responsiveWidth(70),
              borderRadius: responsiveWidth(1.2),
              marginTop: responsiveHeight(1.5),
              marginHorizontal: responsiveWidth(2),
              fontSize: responsiveFontSize(2.2),
              paddingLeft: responsiveWidth(3),
              color: '#000'
            }} />

          <TouchableOpacity
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: responsiveWidth(50),
              height: responsiveHeight(6),
              backgroundColor: 'blue',
              borderRadius: responsiveWidth(10),
              marginTop: responsiveHeight(4),
            }}
            onPress={withdrawApi}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: responsiveFontSize(1.7),
                fontWeight: '700',
              }}
            >
              Withdraw Request
            </Text>
          </TouchableOpacity>

        </View>
      ) : (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: responsiveHeight(12),
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: '500',
              color: '#000',
              marginVertical: responsiveHeight(2),
            }}
          >
            Please Add Fund
          </Text>
          <Image
            source={require('../../assets/Image/wallet.jpg')}
            style={{
              width: responsiveWidth(60),
              height: responsiveHeight(30),
              borderRadius: responsiveHeight(2),
              // tintColor: '#fff',
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Funds;

const styles = StyleSheet.create({});
