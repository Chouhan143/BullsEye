import * as React from 'react';
import { useEffect } from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Text,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLORS } from '../../constants';
import Icon from 'react-native-vector-icons/Entypo';
<<<<<<< HEAD
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchCoinData,
  removeAllFromWatchlist,
  selectWatchlistData,
  removeFromWatchlist,
} from '../redux/market/coinSlice';
=======
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoinData } from '../redux/market/coinSlice';
import { removeCartItem } from '../redux/market/coinSlice2';
>>>>>>> eee704d014189c81b97d442931cc0d88c1d8bcbb

const My_Stocks = () => {
  const coinsData = useSelector(state => state.coin.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoinData());
  }, []);
<<<<<<< HEAD

  // const renderItem = ({item}) => {
  //   return (
  //     // <ScrollView style={{flex: 1}}>
  //     <TouchableOpacity
  //       style={{
  //         width: '100%',
  //         height: 60,
  //         backgroundColor: COLORS.bgColor,
  //         marginVertical: 1,
  //         justifyContent: 'center',
  //         paddingHorizontal: 20,
  //       }}>
  //       {/* <View style={styles.topContainer}> */}
  //       <View style={styles.topMiddle}>
  //         <View>
  //           <Text
  //             style={[
  //               styles.topText,
  //               item.percent_chg > 1 ? styles.redText : styles.greenText,
  //             ]}>
  //             {item.trade_name}
  //           </Text>
  //         </View>
  //         <View style={styles.topLast}>
  //           <Text style={[styles.topText,item.percent_chg > 1 ? styles.redText : styles.greenText, {paddingRight: 60}]}>
  //             {item.price.toLocaleString()}
  //           </Text>
  //           <Text style={[styles.topText,item.percent_chg > 1 ? styles.redText : styles.greenText,]}>{item.percent_chg}%</Text>
  //         </View>
  //       </View>
  //       {/* </View> */}
  //     </TouchableOpacity>
  //     // </ScrollView>
  //   );
  // };
=======
  const navigation = useNavigation();
  const navigationHandle = () => {
    navigation.navigate('SearchData');
  };
  const renderItem = ({ item }) => {
    return (
      // <ScrollView style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 60,
          backgroundColor: COLORS.bgColor,
          marginVertical: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        {/* <View style={styles.topContainer}> */}
        <View style={styles.topMiddle}>
          <View>
            <Text
              style={[
                styles.topText,
                item.percent_chg > 1 ? styles.redText : styles.greenText,
              ]}>
              {item.trade_name}
            </Text>
          </View>
          <View style={styles.topLast}>
            <Text style={[styles.topText, item.percent_chg > 1 ? styles.redText : styles.greenText, { paddingRight: 60 }]}>
              {item.price.toLocaleString()}
            </Text>
            <Text style={[styles.topText, item.percent_chg > 1 ? styles.redText : styles.greenText,]}>{item.percent_chg}%</Text>
          </View>
        </View>
        {/* </View> */}
      </TouchableOpacity>
      // </ScrollView>
    );
  };
>>>>>>> eee704d014189c81b97d442931cc0d88c1d8bcbb

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.mainBgColor }}>
      <View style={styles.topContainer}>
        <View style={styles.topMiddle}>
          <View>
            <Text style={styles.topText}>Stock Name</Text>
          </View>
          <View style={styles.topLast}>
            <Text style={[styles.topText, { paddingRight: 20 }]}>Price</Text>
            <Text style={styles.topText}>Change / Vol</Text>
          </View>
        </View>
      </View>
      {/* <FlatList
        data={coinsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

const My_Watchlist = () => {
  const watchlistData = useSelector(selectWatchlistData);
  const coinsData = useSelector(state => state.coin.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoinData());
  }, []);

  const handleRemoveAll = () => {
    dispatch(removeAllFromWatchlist());
  };

  const removeFromFromWatchlist = () => {
    dispatch(removeFromWatchlist());
  };

  const navigation = useNavigation();
  const Items = useSelector(state => state.coin.name);
  // console.log(addedItems);
  const removeItem = (item) => {
    dispatch(removeCartItem(item))
  }
  const navigationHandle = () => {
    navigation.navigate('SearchData');
  };
  const renderItem = ({ item }) => {
    return (
      // <ScrollView style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 60,
          backgroundColor: COLORS.bgColor,
          marginVertical: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        {/* <View style={styles.topContainer}> */}
        <View style={styles.topMiddle}>
          <View>
            <Text style={styles.topText}>{item.trade_name}</Text>
          </View>
          <View style={styles.topLast}>
<<<<<<< HEAD
            <Text style={[styles.topText, {paddingRight: 60}]}>
              {item.price}
=======
            <Text style={[styles.topText, { paddingRight: 60 }]}>
              {item.price.toLocaleString()}
>>>>>>> eee704d014189c81b97d442931cc0d88c1d8bcbb
            </Text>
            <Text style={styles.topText}>{item.percent_chg}%</Text>
          </View>
        </View>
        <TouchableOpacity onPress={removeFromFromWatchlist(item)}>
          <Text>Remove</Text>
        </TouchableOpacity>
        {/* </View> */}
      </TouchableOpacity>
      // </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.mainBgColor }}>
      <View style={styles.topContainer}>
        <View style={styles.topMiddle}>
          <View>
            <Text style={styles.topText}>Stock Name</Text>
          </View>
          <View style={styles.topLast}>
            <Text style={[styles.topText, { paddingRight: 20 }]}>Price</Text>
            <Text style={styles.topText}>Change / Vol</Text>
          </View>
        </View>
      </View>

      {watchlistData.length > 0 ? (
        <FlatList
          data={watchlistData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
        <Text>No items in watchlist</Text>
        </View>
      )}
      <TouchableOpacity onPress={handleRemoveAll}>
        <Text>remove all</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addBox} onPress={navigationHandle}>
        <Icon name="plus" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

<<<<<<< HEAD
// const Watchlist2 = () => {
//   return (
//     <View style={{flex: 1, backgroundColor: COLORS.mainBgColor}}>
//       <TouchableOpacity style={styles.addBox}>
//         <Icon name="plus" size={25} color="#fff" />
//       </TouchableOpacity>
//       <View style={styles.topContainer}>
//         <View style={styles.topMiddle}>
//           <View>
//             <Text style={styles.topText}>Stock Name</Text>
//           </View>
//           <View style={styles.topLast}>
//             <Text style={[styles.topText, {paddingRight: 20}]}>Price</Text>
//             <Text style={styles.topText}>Change / Vol</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
=======
const Watchlist2 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.mainBgColor }}>
      <TouchableOpacity style={styles.addBox}>
        <Icon name="plus" size={25} color="#fff" />
      </TouchableOpacity>
      <View style={styles.topContainer}>
        <View style={styles.topMiddle}>
          <View>
            <Text style={styles.topText}>Stock Name</Text>
          </View>
          <View style={styles.topLast}>
            <Text style={[styles.topText, { paddingRight: 20 }]}>Price</Text>
            <Text style={styles.topText}>Change / Vol</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
>>>>>>> eee704d014189c81b97d442931cc0d88c1d8bcbb

const renderScene = SceneMap({
  first: My_Stocks,
  second: My_Watchlist,
  // third: Watchlist2,
});

export default function Tab_View() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
<<<<<<< HEAD
    {key: 'first', title: 'My Stocks'},
    {key: 'second', title: 'My Watchlist'},
    // {key: 'third', title: 'Watchlist2'},
=======
    { key: 'first', title: 'My Stocks' },
    { key: 'second', title: 'My Watchlist' },
    { key: 'third', title: 'Watchlist2' },
>>>>>>> eee704d014189c81b97d442931cc0d88c1d8bcbb
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={{ backgroundColor: COLORS.bgColor, height: 40 }} // Set your desired header color here
      labelStyle={{ color: COLORS.textColor, fontSize: 11, fontWeight: '700' }}
      indicatorStyle={{ backgroundColor: '#1A6164' }}
      activeColor="#1A6164"
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  addBox: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
    backgroundColor: '#1A6164',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#6799CE',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  topMiddle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLast: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  topText: {
    color: COLORS.textColor,
    fontSize: 12,
    fontWeight: '500',
  },
  redText: {
    color: '#ff3333',
  },

  greenText: {
    color: '#008000',
  },
});
