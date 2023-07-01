import React from 'react';
import {
  View,
  Animated,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { IconTextButton } from '../components';
import { BuySellButton } from '../components';
import { COLORS, SIZES, icons } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {
  setIsTradeModalVisible,
  selectIsTradeModalVisible,
} from '../Src/redux/market/coinSlice';
import { useNavigation, } from '@react-navigation/native';


const { height, width } = Dimensions.get('window');
const MainLayout = ({ children, props }) => {
  const navigation = useNavigation();
  const data = {
    qty: 2,
    avg: 66.65,
    percentage: '+5.30%',
    stockName: 'BHEL',
    invested: 2781.85,
    ltp: 90.0,
    ltpPercentage: '-0.48%',
  };

  const data_1 = {
    qty: 16,
    avg: 98.65,
    percentage: '+12.30%',
    stockName: 'GAIL',
    invested: 1570.85,
    ltp: 30.0,
    ltpPercentage: '-0.90%',
  };

  const data_2 = {
    qty: 50,
    avg: 70.65,
    percentage: '+12.30%',
    stockName: 'IDEA',
    invested: 5000.85,
    ltp: 40.0,
    ltpPercentage: '-0.63%',
  };

  function Test(props) {
    const { qty, avg, percentage, stockName, invested, ltp, ltpPercentage } =
      props;
    return (
      <View
        style={[
          styles.searchEluation,
          {
            paddingVertical: 15,
          },
        ]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}>Qty.</Text>
              <Text style={{ color: 'black' }}>{qty}</Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <Text style={{ color: 'gray' }}>Avg.</Text>
              <Text style={{ color: 'black' }}>{avg}</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'green' }}>{percentage}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'black', fontWeight: '700' }}>
                {stockName}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'green' }}>{ltpPercentage}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'gray', paddingRight: 5 }}>Invested</Text>
              <Text style={{ color: 'black' }}>{invested}</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'gray' }}>LTP </Text>
              <Text style={{ color: 'black' }}>{ltp}</Text>
              <Text style={{ color: 'red' }}> ({ltpPercentage})</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  dispatch = useDispatch();
  const isTradeModalVisible = useSelector(selectIsTradeModalVisible);
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const closeModal = () => {
    // Dispatch the action to hide the trade modal
    // or perform any other necessary operations
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
    outputRange: [SIZES.height, SIZES.height - 450],
  });

  return (
    <TouchableOpacity activeOpacity={1} onPress={closeModal} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
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
            height: 700,
            size: SIZES.padding,
            backgroundColor: '#fff',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}>
          <Test {...data} />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingTop: 15,
            }}>
            <BuySellButton
              label="Buy"
              onPress={() => navigation.navigate("BuySrceen")}
              backgroundColor={'#138F6A'}
            />

            <BuySellButton
              label="Sell"
              onPress={() => navigation.navigate("BuySrceen")}
              backgroundColor={'red'}
            />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 20,
              borderBottomWidth: 0.2,
              borderBottomColor: '#fff',
            }}>
            <Icon name="graph-bar" size={25} color="#138F6A" />
            <Text
              style={{
                color: '#138F6A',
                fontSize: 16, 
                fontWeight: '700',
                paddingHorizontal: 10,
              }}>
              View Chart
            </Text>
            <Icon2 name="arrowright" size={25} color="#138F6A" /> 
          </View>
        </Animated.View>
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

  searchEluation: {
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
