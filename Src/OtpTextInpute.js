import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {color} from 'react-native-elements/dist/helpers';
import {COLORS} from '../constants';

const OtpTextInpute = () => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();
  return (
    <View style={styles.container}>
      <View style={styles.otpView}>
        <TextInput
          ref={et1}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length >= 1) {
              et2.current.focus();
            } else if (text.length < 1) {
              et1.current.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length >= 1) {
              et3.current.focus();
            } else if (text.length < 1) {
              et1.current.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length >= 1) {
              et4.current.focus();
            } else if (text.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length >= 1) {
              et5.current.focus();
            } else if (text.length < 1) {
              et3.current.focus();
            }
          }}
        />
        <TextInput
          ref={et5}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length >= 1) {
              et6.current.focus();
            } else if (text.length < 1) {
              et4.current.focus();
            }
          }}
        />
        <TextInput
          ref={et6}
          style={styles.inputView}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length >= 1) {
              et6.current.focus();
            } else if (text.length < 1) {
              et5.current.focus();
            }
          }}
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
