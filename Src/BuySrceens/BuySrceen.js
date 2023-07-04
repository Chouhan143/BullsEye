import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  LogBox,
  Switch,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fetchCoinData} from '../../Src/redux/market/coinSlice';
import {useRoute} from '@react-navigation/native';
import {COLORS} from '../../constants';
import {postData} from '../../constants/hooks/ApiHelper';
import Toast from 'react-native-toast-message';
import {
  incrementCounter,
  decrementCounter,
} from '../../Src/redux/market/coinSlice';
// import SwitchToggle from "react-native-switch-toggle";
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const {width, height} = Dimensions.get('window');

const BuyScreen = () => {
  const route = useRoute();
  const selectedItem = route.params?.selectedItem; // Retrieve the selected item from the route parameters
  const counter = useSelector(state => state.coin.counter);
  const [text, setText] = useState('');
  const [textT, setTextT] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const coinsData = useSelector(state => state.coin.data);
  const [requiredValue, setRequiredValue] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [buyInputeFeild, setBuyInputeFeild] = useState({
    trade_mode: 'buy',
    trade_name: '',
    max_lot: '',
    market_price: '',
    limit: '',
    target: '',
    stop_loss: '',
    trade_type: 'intraday',
    wallet_pin: '',
  });

  const {
    trade_name,
    max_lot,
    market_price,
    limit,
    target,
    stop_loss,
    wallet_pin,
  } = buyInputeFeild;

  const handleInputChange = (name, value) => {
    setBuyInputeFeild({
      ...buyInputeFeild,
      [name]: value,
    });
  };

  // if (counter === undefined) {
  //   setBuyInputeFeild({
  //     ...buyInputeFeild,
  //     counter: 0,
  //   });

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    if (counter === 1) {
      return;
    }
    dispatch(decrementCounter());
  };

  const handleButtonPress = buttonId => {
    setSelectedButton(buttonId);

    if (buttonId === 2) {
      setTextT(selectedItem ? selectedItem.price.toString() : '');
      calculateRequiredValue(
        text,
        selectedItem ? selectedItem.price.toString() : '',
      );
    } else if (buttonId === 1) {
      setTextT('');
      calculateRequiredValue(text, '');
    }
  };

  const handlePressIn = event => {
    event.persist();
    setIsPressed(true);
  };

  const handlePressOut = event => {
    event.persist();
    setIsPressed(false);
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchCoinData());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateRequiredValue = (quantity, buyingPrice) => {
    const numericQuantity = parseFloat(quantity);
    const numericBuyingPrice = parseFloat(buyingPrice);

    if (!isNaN(numericQuantity) && !isNaN(numericBuyingPrice)) {
      const required = numericQuantity * numericBuyingPrice;
      setRequiredValue(required.toFixed(2));
    } else {
      setRequiredValue(0);
    }
  };

  const handleTextChange = inputText => {
    // Remove any non-numeric characters from the input
    const numericValue = inputText.replace(/[^0-9]/g, '');
    setText(numericValue);
    calculateRequiredValue(numericValue, textT);
  };

  const handleTextChange1 = inputText => {
    // Remove any non-numeric and non-decimal characters from the input
    const numericValue = inputText.replace(/[^0-9.]/g, '');
    calculateRequiredValue(text, numericValue);
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

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const renderButton = (buttonId, buttonColor, title) => (
    <TouchableHighlight
      key={buttonId}
      style={[
        styles.button,
        {
          backgroundColor: selectedButton === buttonId ? 'green' : '#112A46',
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

  const baseUrl = 'https://scripts.bulleyetrade.com/api/trades';

  const BuyKnow = async () => {
    const payload = {
      trade_mode: 'intraday',
      trade_name,
      max_lot,
      counter,
      market_price,
      limit,
      target,
      stop_loss,
      trade_type: 'buy',
      wallet_pin,
    };
    try {
      const res = await postData(baseUrl, payload);
      const accessToken = res.data.payload.access_token;
      await AsyncStorage.setItem('accessToken', accessToken);
      if (res.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Trade placed successfully',
        });
        navigation.navigate('MainLayout');
      } else {
        const responseMessage = res.message; // Access the response message
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: responseMessage,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* header part .................. */}
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
                {selectedItem ? selectedItem.trade_name : ''}
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
                {selectedItem ? selectedItem.price : ''}
              </Text>
            </View>
          </View>
          {/* intraday part ........... */}

          <View style={styles.intradayBox}>
            <Text style={{color: '#fff'}}>Intraday</Text>
          </View>

          {/* Buying price & lots .............. */}
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 15,
            }}>
            <View
              style={{
                paddingVertical: 10,
                width: 150,
                justifyContent: 'center',
                display: 'flex',
                alignSelf: 'center',
              }}>
              <Text style={{color: '#000'}}>Max Lot</Text>
              <View
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={[
                  styles.inputWrapper,
                  {borderColor: isPressed ? '#BBC7CF' : COLORS.TopBox},
                ]}>
                <View style={styles.inputContainer}>
                  <TouchableOpacity onPress={handleDecrement}>
                    <AntDesign
                      name="minuscircleo"
                      size={20}
                      color="#000"
                      style={{marginRight: 5}}
                    />
                  </TouchableOpacity>
                  <TextInput
                    style={styles.textInput}
                    value={buyInputeFeild.counter} // Update the value prop
                    onChangeText={value => handleInputChange('counter', value)} // Update the onChangeText prop
                    keyboardType="numeric"
                    maxLength={7}
                    // placeholder="Qnt."
                    placeholderTextColor={'#000'}
                  />
                  {/* <Text>{selectedItem ? selectedItem.price : ''} </Text> */}
                  <TouchableOpacity onPress={handleIncrement}>
                    <AntDesign
                      name="pluscircleo"
                      size={20}
                      color="#000"
                      style={{marginRight: 5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                paddingVertical: 10,
                width: 150,
                justifyContent: 'center',
                display: 'flex',
                alignSelf: 'center',
              }}>
              <Text style={{color: '#000'}}>Buying Price</Text>
              <View
                style={[
                  styles.inputWrapper,
                  {borderColor: isPressed ? 'red' : COLORS.TopBox},
                ]}>
                <View
                  style={[
                    styles.inputContainer,
                    {justifyContent: 'flex-start'},
                  ]}>
                  <TextInput
                    style={styles.textInput}
                    value={textT}
                    onChangeText={handleInputChange}
                    keyboardType="numeric"
                    placeholder="₹"
                    placeholderTextColor={'#000'}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={[styles.sectionHeader, {marginTop: 15}]}>
            <Text style={styles.sectionHeaderText}>Order Type</Text>
          </View>
          <View style={styles.buttonContainer}>
            {renderButton(1, '#BBC7CF', 'Limit')}
            {renderButton(2, '#BBC7CF', 'Market')}
          </View>
          <View style={styles.separator}></View>
          {/* stoploss section -------------- */}

          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <View>
              <Text style={[styles.sectionHeaderText, {display: 'flex'}]}>
                Stop Loss Order
              </Text>
            </View>

            <View>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? 'green' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          {isEnabled && (
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 15,
                marginTop: 15,
              }}>
              <View style={{display: 'flex', justifyContent: 'center'}}>
                <Text style={{color: '#000', fontSize: 16}}>Stop Loss</Text>
                <View
                  style={{
                    paddingVertical: 10,
                    width: 150,
                    justifyContent: 'center',
                    display: 'flex',
                    alignSelf: 'center',
                  }}>
                  <View
                    style={[
                      styles.inputWrapper,
                      {borderColor: isPressed ? 'red' : COLORS.TopBox},
                    ]}>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.textInput}
                        placeholder="₹"
                        // value={textT}
                        // onChangeText={handleTextChange1}
                        keyboardType="numeric"
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={{display: 'flex', justifyContent: 'center'}}>
                <Text style={{color: '#000', fontSize: 16}}>Target</Text>
                <View
                  style={{
                    paddingVertical: 10,
                    width: 150,
                    justifyContent: 'center',
                    display: 'flex',
                    alignSelf: 'center',
                  }}>
                  <View
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    style={[
                      styles.inputWrapper,
                      {borderColor: isPressed ? '#BBC7CF' : COLORS.TopBox},
                    ]}>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.textInput}
                        // value={text}
                        // onChangeText={handleTextChange}
                        keyboardType="numeric"
                        placeholder="₹"
                        maxLength={7}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}

          <View style={styles.separator}></View>

          {/* wallet pin .......... */}

          <View style={[styles.textInput]}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: COLORS.secondary,
                marginBottom: 15,
              }}>
              Wallet Pin
            </Text>
            <TextInput
              style={[
                styles.inputContainer,
                {color: 'gray', paddingHorizontal: 30, borderRadius: 15},
              ]}
              placeholder="Pin here"
              placeholderTextColor={'#000'}
              secureTextEntry
              value={wallet_pin}
              onChangeText={value => handleInputChange('wallet_pin', value)}
            />
          </View>

          <View
            style={{
              backgroundColor: 'green',
              width: width - 30,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 30,
              marginTop: height / 3 - 180,
            }}>
            <TouchableOpacity onPress={BuyKnow}>
              <Text style={{color: '#ffff'}}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBgColor,

    // height:'100%'
  },

  intradayBox: {
    backgroundColor: '#112A46',
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
    borderColor: '#BBC7CF',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#bdd3ea',
  },
  textInput: {
    fontSize: 18,
    flex: 1,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    borderBottomColor: '#BBC7CF',
    borderBottomWidth: 0.5,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  sectionHeader: {
    marginLeft: 10,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    marginLeft: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  buyButton: {
    display: 'flex',
    bottom: 0,
    width: width - 20,
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -30,
  },
  buyButtonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default BuyScreen;
