import React from 'react';
import {View, Animated, Text} from 'react-native';
import {IconTextButton} from '../components';
import {BuySellButton} from '../components';
import {COLORS, SIZES, icons} from '../constants';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {
  setIsTradeModalVisible,
  selectIsTradeModalVisible,
} from '../Src/redux/market/coinSlice';

const MainLayout = ({children}) => {
  const isTradeModalVisible = useSelector(selectIsTradeModalVisible);
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

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
    outputRange: [SIZES.height, SIZES.height - 350],
  });

  return (
    <View style={{flex: 1}}>
      {children}

      {/* Dim Background */}

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

      {/* model */}

      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: modalY,
          width: '100%',
          height: 500,
          size: SIZES.padding,
          backgroundColor: '#2E538C',
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 12,
            
            borderBottomWidth:0.2,
            borderBottomColor:'#fff'
          }}>
          <View>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '700'}}>
              AGOL
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              
            }}>
            <Text style={{color: '#fff', fontSize: 14}}>BSE </Text>
            <Text style={{color: '#fff', fontSize: 14}}>76.98 (0.00%) </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            paddingTop:15,
          
          }}>
          <BuySellButton
            label="Buy"
            onPress={console.log('Buy Stocks Succesfully')}
            backgroundColor={'#138F6A'}
          />

          <BuySellButton
            label="Sell"
            onPress={console.log('Sell Stocks Succesfully')}
            backgroundColor={'red'}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop:20,
            paddingBottom:20,
            borderBottomWidth:0.2,
            borderBottomColor:'#fff'
          }}>
          <Icon name="graph-bar" size={25} color="#fff" />
          <Text style={{color: '#fff', fontSize: 16, fontWeight: '700',paddingHorizontal:10}}>
            View Chart
          </Text>
          <Icon2 name="arrowright" size={25} color="#fff" />
        </View>
      </Animated.View>
    </View>
  );
};

export default MainLayout;
