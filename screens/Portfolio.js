import * as React from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MainLayout from './MainLayout';
import {COLORS} from '../constants';
import SearchBar from '../Src/SearchBar';
import {useNavigation} from '@react-navigation/native';
import {
  setIsTradeModalVisible,
  selectIsTradeModalVisible,
  getLiveTrade,
  getPastTrade,
} from '../Src/redux/market/coinSlice';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import getLiveTrade from '../Src/redux/market/coinSlice';

const {height, width} = Dimensions.get('window');

function Test(props) {
  const {qty, avg, percentage, stockName, invested, ltp, ltpPercentage} = props;
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
        Portfolio
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'gray'}}>Qty.</Text>
            <Text style={{color: 'black'}}>{qty}</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'gray'}}>Avg.</Text>
            <Text style={{color: 'black'}}>{avg}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'green'}}>{percentage}</Text>
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
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: '700'}}>{stockName}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'green'}}>{ltpPercentage}</Text>
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
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'gray', paddingRight: 5}}>Invested</Text>
            <Text style={{color: 'black'}}>{invested}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'gray'}}>LTP </Text>
            <Text style={{color: 'black'}}>{ltp}</Text>
            <Text style={{color: 'red'}}> ({ltpPercentage})</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const FirstRoute = () => {
  const navigation = useNavigation();
  const isTradeModalVisible = useSelector(selectIsTradeModalVisible);
  const dispatch = useDispatch();
  const liveTradedata = useSelector(state => state.coin.liveTradedata);
  const handleTradeButtonPress = () => {
    dispatch(setIsTradeModalVisible(!isTradeModalVisible));
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getLiveTrade()).catch(error => {
        console.log('Error fetching coin TradeLivedata:', error);
      });
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => {
      clearInterval(timer); // Clear the interval when the component unmounts
    };
  }, []);



   const SquareOff = async (tradeId) => {
  try {
    console.log("trad",tradeId)
    const token = await AsyncStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `https://scripts.bulleyetrade.com/api/square_off/${tradeId}`,
      config,
    );
    console.log('past Trade', response);
  } catch (error) {
    console.log('error', error);
  }
};



const squreOffhandle = (tradeId) => {
  SquareOff(tradeId);
};

  

 


  const renderItemLiveTradeUi = ({item}) => {
    // Render the data for each item in the FlatList
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
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'gray'}}>Lot </Text>
              <Text style={{color: 'black'}}>{item.max_lot}</Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{color: 'black', fontWeight: '700'}}>
                  {item.trade_name}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'gray'}}>Limit </Text>
              <Text style={{color: 'green'}}>{item.limit}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'gray', paddingRight: 5}}>Stop Loss</Text>
              <Text style={{color: 'black'}}>{item.stop_loss}</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'gray'}}>Target </Text>
              <Text style={{color: 'black'}}>{item.target}</Text>
              {/* <Text style={{color: 'red'}}> ({})</Text> */}
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: responsiveWidth(8),
          }}>
          <TouchableOpacity style={styles.squareOffBtn} onPress={() => squreOffhandle(item.id)} >
            <Text
              style={{
                color: '#fff',
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              Square off
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.squareOffBtn,
              {
                width: responsiveWidth(15),
              },
            ]}>
            <Text
              style={{
                color: '#fff',
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    //  <MainLayout>
    <View style={{flex: 1, backgroundColor: COLORS.mainBgColor}}>
      <View style={styles.container}>
        <View style={{paddingVertical: 10, marginTop: 5}}>
          <FlatList
            data={liveTradedata}
            renderItem={renderItemLiveTradeUi}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
    // </MainLayout>
  );
};

const SecondRoute = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getPastTrade()).catch(error => {
        console.log('Error fetching coin TradeLivedata:', error);
      });
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => {
      clearInterval(timer); // Clear the interval when the component unmounts
    };
  }, []);

  const pastTradedata = useSelector(state => state.coin.pastTradedata);



  const renderItemLiveTradeUi = ({item}) => {
    // Render the data for each item in the FlatList
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
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'gray'}}>Lot </Text>
              <Text style={{color: 'black'}}>{item.max_lot}</Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{color: 'black', fontWeight: '700'}}>
                  {item.trade_name}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'gray'}}>Limit </Text>
              <Text style={{color: 'green'}}>{item.limit}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'gray', paddingRight: 5}}>Stop Loss</Text>
              <Text style={{color: 'black'}}>{item.stop_loss}</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'gray'}}>Target </Text>
              <Text style={{color: 'black'}}>{item.target}</Text>
              {/* <Text style={{color: 'red'}}> ({})</Text> */}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.mainBgColor}}>
      <View style={styles.container}>
        <View style={{paddingVertical: 10, marginTop: 5}}>
          <FlatList
            data={pastTradedata}
            renderItem={renderItemLiveTradeUi}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

// const SecondRoute = () => {
//   return (
//     <View style={{flex: 1, backgroundColor: '#e6e6e6'}}>
//       <View style={styles.container}>
//         <View style={styles.sub_container_position}></View>
//       </View>
//     </View>
//   );
// };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function Portfolio() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'LIVE TRADES'},
    {key: 'second', title: 'PAST TRADES'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={{backgroundColor: COLORS.bgColor, height: 40}} // Set your desired header color here
      labelStyle={{color: COLORS.textColor, fontSize: 11, fontWeight: '700'}}
      indicatorStyle={{backgroundColor: '#1A6164'}}
      activeColor="#1A6164"
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width: width,
  //   height: height,
  //   marginTop: 80,
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   backgroundColor: '#ffff',
  // },
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
    shadowColor: '#b3b3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  squareOffBtn: {
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    backgroundColor: COLORS.BottomTab,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
  },
});
