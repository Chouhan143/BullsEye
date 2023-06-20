import React, {useEffect, useRef, useCallback} from 'react';
import {
  GestureHandlerRootView,
  GestureDetector,
} from 'react-native-gesture-handler';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {MainLayout} from './';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCoinData} from '../Src/redux/market/coinSlice';
import TopTab from '../Src/TabScreens/TopTab';
import {
  BalanceInfo,
  CardSlider,
  Chart,
  IconTextButton,
  TopTabNavigator,
} from '../components';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from '../Src/BottomSheet';

const Watchlist = () => {
  // BootomSheet Modal  start ---------------------------------------
  const ref = useRef(null);
  const onPress = useCallback(() => {
    const isActive = ref.current?.isActive();
    if (isActive) {
      ref.current?.scrollTo(0);
    } else {
      ref.current?.scrollTo(-200);
    }
  }, []);
  // BootomSheet Modal  end  ---------------------------------------

  // redux api data  start  ---------------------------------------
  const dispatch = useDispatch();
  const coinsData = useSelector(state => state.coin.data);
  const isLoader = useSelector(state => state.coin.isLoader);
  console.log('coidataState', coinsData);
  useEffect(() => {
    dispatch(fetchCoinData());
  }, []);
  // redux api data  end  ---------------------------------------

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainLayout>
        <View
          style={{
            flex: 1,
            backgroundColor: '#2E538C',
          }}>
          <TopTab />
        </View>
        <BottomSheet ref={ref} />
      </MainLayout>
    </GestureHandlerRootView>
  );
};

export default Watchlist;

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    backgroundColor: '#A74CAB',
    borderWidth: 2,
    borderColor: '#ffff',
    borderRadius: 20,
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
