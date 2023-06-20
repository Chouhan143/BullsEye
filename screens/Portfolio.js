import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {MainLayout} from './';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCoinData} from '../Src/redux/market/coinSlice';
import {BalanceInfo, CardSlider, Chart, HeaderBar} from '../components';
import {COLORS, FONTS, SIZES, icons} from '../constants';

const Portfolio = () => {
  const dispatch = useDispatch();
  const coinsData = useSelector(state => state.coin.data);
  const isLoader = useSelector(state => state.coin.isLoader);
  console.log('coidataState', coinsData);

  useEffect(() => {
    dispatch(fetchCoinData());
  }, []);

  function renderWalletInfoSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.header,
        }}>
        <HeaderBar
          title="Portfolio"
          containerStyle={{
            marginLeft: 0,
          }}
        />

        {/* balance Info */}
        <BalanceInfo
          title="Current Balance"
          displayAmount="25,000"
          changePer={-2.5}
          containerStyle={{
            marginTop: 10,
          }}
        />
      </View>
    );
  }

 

  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}>
        {/* Header- wallet-info */}

      

        {/* CardSlider */}
      
          <View style={{marginVertical: SIZES.radius, paddingHorizontal: SIZES.padding}}>
            <Text style={{color: COLORS.white, ...FONTS.h3, fontSize: 18}}>
              Quick Buy
            </Text>
          </View>
        
        <CardSlider />

        {/* Top CryptoCurrency */}
        <View style={{flex: 1}}>
          <View
            style={{
              marginBottom: SIZES.radius,
              paddingHorizontal: SIZES.padding,
            }}>
            <Text style={{color: COLORS.white, ...FONTS.h3, fontSize: 18}}>
              Top CryptoCurrency
            </Text>
          </View>
    
        </View>
      </View>
    </MainLayout>
  );
};

export default Portfolio;
