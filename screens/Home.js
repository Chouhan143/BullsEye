import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
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
      <View style={styles.container}>
        <View style={styles.sideLine}></View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
          }}>
          <Text
            style={{color: COLORS.textColor, fontSize: 16, fontWeight: '700'}}>
            {item.trade_name}
          </Text>
          <Text style={{color: COLORS.textColor}}> {item.expiry_date}</Text>
          <Text
            style={{color: COLORS.textColor, fontSize: 14, fontWeight: '500'}}>
            {item.price}
          </Text>
          <Text style={{color: 'green'}}>{item.percent_chg}%</Text>
        </View>
      </View>
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
    <ScrollView style={{flex: 1}}>
      <View
        style={[
          styles.searchEluation,
          {
            paddingVertical: 20,
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
          <Text style={{color: COLORS.textColor}}> SORT</Text>

          <Text style={{color: COLORS.textColor}}> SORT 2</Text>

          <Text style={{color: COLORS.textColor}}> SORT 3</Text>
        </View>
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
    marginHorizontal: 10,
    backgroundColor: COLORS.bgColor,
    width: 180,
    height: 100,
  },
  sideLine: {
    width: 5,
    height: 60,
    backgroundColor: 'red',
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
});
