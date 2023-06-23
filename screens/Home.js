import {StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import SearchBar from '../Src/SearchBar';
import {COLORS} from '../constants';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCoinData} from '../Src/redux/market/coinSlice';

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

const renderItem = ({item}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={[styles.container, styles.searchCommodityBox]}>
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
            style={{color: COLORS.textColor, fontSize: 12, fontWeight: '500'}}>
            {item.trade_name}
          </Text>
          <Text style={{color: COLORS.textColor, fontSize: 10}}>
            {' '}
            {item.expiry_date}
          </Text>
          <Text
            style={{color: COLORS.textColor, fontSize: 10, fontWeight: '500'}}>
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

const Home = () => {
  const coinsData = useSelector(state => state.coin.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoinData());
  }, []);

  return (
    <ScrollView style={{flex: 1,color:COLORS.mainBgColor}}>
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
          <Text style={{color: COLORS.textColor}}> Sort</Text>

          <Text style={{color: COLORS.textColor}}> FNO group</Text>

          <Text style={{color: COLORS.textColor}}> Mini</Text>
        </View>
      </View>
      <View style={{marginTop:10}}>
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
          style={{color: COLORS.textColor, fontSize: 14, fontWeight: '600'}}>
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
          style={{color: COLORS.textColor, fontSize: 14, fontWeight: '600'}}>
          FNO near month
        </Text>
      </View>
      <FlatList
        data={coinsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
      />
      <View style={{marginVertical: 20}}>
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
          marginBottom: 10,
        }}>
        <Text
          style={{color: COLORS.textColor, fontSize: 14, fontWeight: '600'}}>
          FNO Far month
        </Text>
      </View>
      <FlatList
        data={coinsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
      />
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
    borderRadius:3
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
