import React, { useEffect } from 'react';
import { View, Animated, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setIsTradeModalVisible, selectIsTradeModalVisible } from '../Src/redux/market/coinSlice';
import { useNavigation } from '@react-navigation/native';
import { fetchCoinData } from '../Src/redux/market/coinSlice';
import { BuySellButton } from '../components';
import { COLORS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/AntDesign';

const { height,width } = Dimensions.get('window');

const MainLayout = ({ children, selectedItem }) => {
  const dispatch = useDispatch();
  const coinsData = useSelector(state => state.coin.data);
  const isTradeModalVisible = useSelector(selectIsTradeModalVisible);
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchCoinData());

    }, 1000); // 1000 milliseconds = 1 second

    return () => clearInterval(interval); // Cleanup function to clear the interval on unmount
  }, []);

  const handleItemSelect = (coinsData) => {
    dispatch(setIsTradeModalVisible(false));
    navigation.navigate('BuyScreen', { selectedItem:coinsData });
  };

 



  const closeModal = () => {
    dispatch(setIsTradeModalVisible(false));
  };

  React.useEffect(() => {
    if (isTradeModalVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height, height - 300],
  });

  function Test({ coinsData}) {
   
    return (
      <View style={[styles.searchEluation, { paddingVertical: 15 }]}>
        <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between' }}>
          <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 20 }}>
            <View style={{ display: 'flex',gap:5  }}>
              {/* <Text style={{ color: 'black' }}>Trade_name</Text> */}
              <Text style={{ color: 'black',fontSize:18,fontWeight:'700' }}>{coinsData ? coinsData.trade_name : ''}</Text>
              <Text style={{ color: 'black',fontSize:12 }}> Exp. {coinsData ? coinsData.expiry_date : ''}</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 20 }}>
            <View style={{ display: 'flex',justifyContent:'center',alignItems:'center',gap:5  }}>
              <Text style={{ color: 'black',fontWeight:'700' }}>INR {coinsData ? coinsData.price.toLocaleString() : ''}</Text>
              <Text style={{ color: 'green',fontSize:12 }}>({coinsData ? coinsData.percent_chg : ''}%)</Text>
            </View>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
          <View style={{ display: 'flex',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.mainBgColor,width:80,height:50,borderRadius:3  }}>
              <Text style={{ color: 'black', fontSize:14 }}>Open</Text>
              <Text style={{ color: 'black', }}>{coinsData ? coinsData.open : ''}</Text>
          </View>
          <View style={{ display: 'flex',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.mainBgColor,width:80,height:50 ,borderRadius:3 }}>
              <Text style={{ color: 'black', fontSize:14 }}>High</Text>
              <Text style={{ color: 'black', }}>{coinsData ? coinsData.high : ''}</Text>
          </View>
           <View style={{ display: 'flex',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.mainBgColor,width:80,height:50,borderRadius:3  }}>
              <Text style={{ color: 'black', fontSize:14 }}>Low</Text>
              <Text style={{ color: 'black', }}>{coinsData ? coinsData.low : ''}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={closeModal} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {children}

        {isTradeModalVisible && (
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: COLORS.transparentBlack,
            }}
            opacity={modalAnimatedValue}
          />
        )}

{
  selectedItem && (

 
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: 700,
            size: SIZES.padding,
            backgroundColor: COLORS.bgColor,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        >
          {selectedItem && <Test coinsData={selectedItem} selectedItem={selectedItem} />}
         
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            // paddingTop: 15,
          }}>
            <BuySellButton
              label="Buy"
              onPress={() => handleItemSelect(selectedItem)}
              backgroundColor={'#138F6A'}
            />

            <BuySellButton
              label="Sell"
              onPress={() => handleItemSelect(selectedItem)}
              backgroundColor={'red'}
            />
          </View>
         
        </Animated.View>
         )}
      </View>
    </TouchableOpacity>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - 200,
    marginTop: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffff',
  },
  sub_container_holdings: {
    width: '90%',
    height: height - 600,
    marginTop: 100,
    borderRadius: 7,
    backgroundColor: '#fff',
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',

    // alignItems: 'center',
    top: -150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // Add other styles as needed
  },
  sub_container_position: {
    width: '90%',
    height: height - 620,
    marginTop: 100,
    borderRadius: 7,
    backgroundColor: '#fff',
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: -150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // Add other styles as needed
  },

  searchEvaluation: {
    borderBottomWidth: 0.1,
    shadowColor: '#b3b3b3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});
