import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../constants';

const OtpTextInpute = ({onOtpInputChange}) => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  const [et1Value, setEt1Value] = useState('');
  const [et2Value, setEt2Value] = useState('');
  const [et3Value, setEt3Value] = useState('');
  const [et4Value, setEt4Value] = useState('');
  const [et5Value, setEt5Value] = useState('');
  const [et6Value, setEt6Value] = useState('');

  const handleOtpInputChange = () => {
    const otpValue =
      et1Value + et2Value + et3Value + et4Value + et5Value + et6Value;
    onOtpInputChange(otpValue);
    console.log('otpValue type:', typeof otpValue);
  };




  return (
    <View style={styles.container}>
      <View style={styles.otpView}>
        <TextInput
          ref={et1}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            setEt1Value(text);
            if (text.length >= 1) {
              et2.current.focus();
            } else if (text.length < 1) {
              et1.current.focus();
            }
            handleOtpInputChange();
          }}
          value={et1Value}
        />
        <TextInput
          ref={et2}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            setEt2Value(text);
            if (text.length >= 1) {
              et3.current.focus();
            } else if (text.length < 1) {
              et1.current.focus();
            }
            handleOtpInputChange();
          }}
          value={et2Value}
        />
        <TextInput
          ref={et3}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            setEt3Value(text);
            if (text.length >= 1) {
              et4.current.focus();
            } else if (text.length < 1) {
              et2.current.focus();
            }
            handleOtpInputChange();
          }}
          value={et3Value}
        />
        <TextInput
          ref={et4}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            setEt4Value(text);
            if (text.length >= 1) {
              et5.current.focus();
            } else if (text.length < 1) {
              et3.current.focus();
            }
            handleOtpInputChange();
          }}
          value={et4Value}
        />

        <TextInput
          ref={et5}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            setEt5Value(text);
            if (text.length >= 1) {
              et6.current.focus();
            } else if (text.length < 1) {
              et4.current.focus();
            }
            handleOtpInputChange();
          }}
          value={et5Value}
        />
        <TextInput
          ref={et6}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            setEt6Value(text);
          
            // if (text.length >= 1) {
            //   et6.current.focus();
            // } else if (text.length < 1) {
            //   et5.current.focus();
            // }
            handleOtpInputChange();
          }}
          value={et6Value}

         
        />
      </View>
    </View>
  );
};

export default OtpTextInpute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  otpView: {
    width: responsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputView: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    borderWidth: responsiveWidth(0.1),
    borderRadius: responsiveWidth(1),
    marginLeft: responsiveWidth(3),
    textAlign: 'center',
    color: COLORS.black,
    fontSize: responsiveFontSize(2.1),
  },
});
