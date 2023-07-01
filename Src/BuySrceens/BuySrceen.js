import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, icons} from '../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const {width, height} = Dimensions.get('window');
const BuyScreen = () => {
  const [text, setText] = useState('');
  const [textT, setTextT] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const navigation = useNavigation();
  const handleButtonPress = buttonId => {
    setSelectedButton(buttonId);
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const handleTextChange = inputText => {
    // Remove any non-numeric characters from the input
    const numericValue = inputText.replace(/[^0-9]/g, '');
    setText(numericValue);
  };

  const handleTextChange1 = inputText => {
    // Remove any non-numeric and non-decimal characters from the input
    const numericValue = inputText.replace(/[^0-9.]/g, '');

    // Restrict to 6 digits before the decimal point
    const maxLength = 10; // 6 digits + 1 decimal point
    if (numericValue.length > maxLength) {
      return;
    }

    // Restrict to 2 decimal places
    const decimalParts = numericValue.split('.');
    if (decimalParts[1] && decimalParts[1].length > 2) {
      return;
    }

    setTextT(numericValue);
  };

  const renderButton = (buttonId, buttonColor, title) => (
    <TouchableHighlight
      key={buttonId}
      style={[
        styles.button,
        {
          backgroundColor: selectedButton === buttonId ? 'green' : buttonColor,
        },
      ]}
      underlayColor={selectedButton === buttonId ? 'green' : buttonColor}
      onPress={() => handleButtonPress(buttonId)}>
      <View>
        <Text style={{color: selectedButton === buttonId ? 'white' : 'white'}}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          backgroundColor: COLORS.bgColor,
          paddingVertical: 15,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
         <TouchableOpacity onPress={goBack}>
          <AntDesign
            name="arrowleft"
            size={20}
            color="#000"
            style={{marginRight: 5}}
          />
         </TouchableOpacity>
          <Text style={{color: '#000', fontWeight: '700', fontSize: 15}}>
            Silver
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="inr"
            size={15}
            color="#000"
            style={{marginRight: 5}}
          />
          <Text style={{color: '#000', fontWeight: '700', marginRight: 5}}>
            68310
          </Text>
          {/* <AntDesign
              name="caretup"
              size={15}
              color="#000"
              style={{marginRight: 5}}
            /> */}
        </View>
      </View>
      <View style={styles.intradayBox}>
        <Text style={{color: '#fff'}}>Intraday</Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          width: width - 15,
          justifyContent: 'center',
          display: 'flex',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#000'}}>Quantity</Text>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[
            styles.inputWrapper,
            {borderColor: isPressed ? COLORS.lightGray3 : COLORS.BottomTab},
          ]}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={text}
              onChangeText={handleTextChange}
              keyboardType="numeric"
              maxLength={7}
              placeholder="₹"
              placeholderTextColor={'#000'}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingVertical: 10,
          width: width - 15,
          justifyContent: 'center',
          display: 'flex',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#000'}}>Buying Price</Text>
        <TouchableOpacity style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={textT}
              onChangeText={handleTextChange1}
              keyboardType="numeric"
              placeholder="₹"
              placeholderTextColor={'#000'}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Order Type</Text>
      </View>
      <View style={styles.buttonContainer}>
        {renderButton(1, COLORS.TopBox, 'Limit')}
        {renderButton(2, COLORS.TopBox, 'Market')}
        {renderButton(3, COLORS.TopBox, 'SL-LMT')}
        {renderButton(4, COLORS.TopBox, 'SL-MKT')}
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Stop Loss Order </Text>
      </View>
      <View style={[styles.inputWrapper,{marginHorizontal:10}]}>
        <TextInput
          style={styles.textInput}
          value={textT}
          onChangeText={handleTextChange1}
          keyboardType="numeric"
        />
      </View>

      
        <View style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBgColor,
  },
  intradayBox: {
    backgroundColor: COLORS.TopBox,
    width: 80,
    paddingVertical: 10,
    marginLeft: 10,
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  inputWrapper: {
    borderColor: COLORS.TopBox,
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 18,
    flex: 1,
    color: '#000',
  },
  inputLabel: {
    fontSize: 18,
    marginLeft: 5,
  },
  infoIcon: {
    width: 25,
    height: 25,
  },
  separator: {
    borderBottomColor: '#BBC7CF',
    borderBottomWidth: 0.5,
    marginTop: 20,
    marginHorizontal: 10,
  },
  sectionHeader: {
    marginTop: 20,
    marginLeft: 10,
  },
  sectionHeaderText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginLeft: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  buyButton: {
 
   width:width-20,
 
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: height-605,
    alignSelf: 'center',
    alignItems: 'center',
  
  },
  buyButtonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default BuyScreen;
