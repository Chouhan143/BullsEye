import * as React from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap,TabBar} from 'react-native-tab-view';
import MainLayout from './MainLayout';
import { COLORS } from '../constants';
import SearchBar from '../Src/SearchBar';
import { useNavigation } from '@react-navigation/native';
import {
  setIsTradeModalVisible,
  selectIsTradeModalVisible,
} from '../Src/redux/market/coinSlice';
import {useSelector, useDispatch} from 'react-redux';

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

  const navigation = useNavigation();
  const isTradeModalVisible = useSelector(selectIsTradeModalVisible);
  const dispatch = useDispatch();

  const handleTradeButtonPress = () => {
    dispatch(setIsTradeModalVisible(!isTradeModalVisible));
  };

  const TabBarCustomButton = ({children, onPress}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  };



  return (
    <MainLayout>
    <View style={{flex: 1, backgroundColor: COLORS.mainBgColor}}>
      <View style={styles.container}>
        <View style={styles.sub_container_holdings}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 20,
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <View style={{display: 'flex'}}>
              <Text style={{color: 'gray'}}>Invested</Text>
              <Text style={{color: 'black', paddingTop: 7}}>32,235.05</Text>
            </View>

            <View
              style={{
                display: 'flex',
                paddingHorizontal: 20,
              }}>
              <Text style={{color: 'gray'}}>Current</Text>
              <Text style={{color: 'black', paddingTop: 7}}>15,725.20</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              flexDirection: 'row',
            }}>
            <Text style={{color: 'gray', fontSize: 16}}>P&L</Text>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
            <Text style={{color: 'green',paddingRight:5}}>+2,530.16</Text>
            <View
              style={{
                backgroundColor: '#a9c0a6',
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderRadius: 5,
              }}>
              <Text style={{color: 'green'}}>+19.13%</Text>
            </View>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.searchEluation,
            {
              paddingVertical: 5,
              marginTop: 75,
            },
          ]}>
          <SearchBar />
        </View>

        <TouchableOpacity onPress={()=>handleTradeButtonPress()} >
          
          <Test {...data} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Test {...data_1} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Test {...data_2} />
        </TouchableOpacity>
      </View>
    </View>
    </MainLayout>
  );
};


const SecondRoute = () => {
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

  const navigation = useNavigation();
  const isTradeModalVisible = useSelector(selectIsTradeModalVisible);
  const dispatch = useDispatch();

  const handleTradeButtonPress = () => {
    dispatch(setIsTradeModalVisible(!isTradeModalVisible));
  };

  const TabBarCustomButton = ({children, onPress}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  };



  return (
    <MainLayout>
    <View style={{flex: 1, backgroundColor: COLORS.mainBgColor}}>
      <View style={styles.container}>
        <View style={styles.sub_container_position}>
          
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
             alignItems:'center'
            }}>
            <Text style={{color: 'gray', fontSize: 16}}>Total P&L</Text>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
            <Text style={{color: 'red',paddingRight:5}}>-230.16</Text>
          
            </View>
          </View>
        </View>

        <View
          style={[
            styles.searchEluation,
            {
              paddingVertical: 5,
              marginTop: 75,
            },
          ]}>
          {/* <SearchBar /> */}
        </View>

        <TouchableOpacity onPress={()=>handleTradeButtonPress()} >
          
          <Test {...data} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Test {...data_1} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Test {...data_2} />
        </TouchableOpacity>
      </View>
    </View>
    </MainLayout>
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
