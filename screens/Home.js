import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBar from '../Src/SearchBar';
import { COLORS } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoinData } from '../Src/redux/market/coinSlice';
import {
  setIsTradeModalVisible,
  selectIsTradeModalVisible,
} from '../Src/redux/market/coinSlice';

import { useNavigation } from '@react-navigation/native';
import { forVerticalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
// import {CommodityBox} from '../components';

// function CommodityBox(props) {
//   const {name, date, price, per} = props;
//   return (
//     <View style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.sideLine}></View>
//         <View
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             gap: 3,
//           }}>
//           <Text
//             style={{color: COLORS.textColor, fontSize: 16, fontWeight: '700'}}>
//             {name}
//           </Text>
//           <Text style={{color: COLORS.textColor}}> {date}</Text>
//           <Text
//             style={{color: COLORS.textColor, fontSize: 14, fontWeight: '500'}}>
//             {price}
//           </Text>
//           <Text style={{color: 'green'}}>{per}</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

const renderItem = ({ item, props }) => {


  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={[styles.container, styles.searchCommodityBox]}
        onPress={() => props.navigation.navigate("MainLayout")}>
        <View
          style={[
            styles.sideLine,
            {
              backgroundColor: item.percent_chg < 1 ? 'red' : 'green',
            },
          ]}></View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
          }}>
          <Text
            style={{ color: COLORS.textColor, fontSize: 12, fontWeight: '500' }}>
            {item.trade_name}
          </Text>
          <Text style={{ color: COLORS.textColor, fontSize: 10 }}>
            {' '}
            {item.expiry_date}
          </Text>
          <Text
            style={{ color: COLORS.textColor, fontSize: 10, fontWeight: '500' }}>
            {item.price}
          </Text>
          <Text
            style={{
              color: item.percent_chg < 1 ? 'red' : 'green',
              fontSize: 10,
            }}>
            {item.percent_chg}%
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Home = (item) => {
  const navigation = useNavigation();
  const isTradeModalVisible = useSelector(selectIsTradeModalVisible);



  const coinsData = useSelector(state => state.coin.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchCoinData());
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearInterval(interval); // Cleanup function to clear the interval on unmount
  }, []);
  return (
    <ScrollView style={{ flex: 1, color: COLORS.mainBgColor }}>
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
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <Text style={{ color: COLORS.textColor }}> Sort</Text>

          <Text style={{ color: COLORS.textColor }}> FNO group</Text>

          <Text style={{ color: COLORS.textColor }}> Mini</Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={coinsData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
        />
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text
          style={{ color: COLORS.textColor, fontSize: 14, fontWeight: '600' }}>
          Cash
        </Text>
      </View>
      <FlatList
        data={coinsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
      />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text
          style={{ color: COLORS.textColor, fontSize: 14, fontWeight: '600' }}>
          FNO near month
        </Text>
      </View>
      <FlatList
        data={coinsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
      />
      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={coinsData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
        />
      </View>

      {/* <ScrollView >
        {coinsData.map((item, index,) => (
          
          <View key={index[0]}>
            <View style={{flex:1,marginLeft:10}}>
              <View style={{ width: 120, height: 100, backgroundColor: 'red', borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <Text>{item.trade_name}</Text>
                <Text>{item.expiry_date}</Text>
                <Text>{item.price}</Text>
                <Text>{item.percent_chg}%</Text>
              </View>
              <View style={{ borderBottomColor: "#BBC7CF", marginTop: 10 }}></View>


            </View>
          </View>
        ))}
      </ScrollView> */}


    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
    backgroundColor: COLORS.bgColor,
    width: 110,
    height: 70,
    borderRadius: 3
  },
  sideLine: {
    width: 3,
    height: 40,
    position: 'absolute',
    left: 0,
    borderRadius: 10,
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
  searchCommodityBox: {
    borderBottomWidth: 0.1,
    shadowColor: COLORS.textColor,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4.84,
    elevation: 5,
  },
});
