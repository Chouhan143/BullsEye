import * as React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {COLORS} from '../../constants';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const My_Stocks = () => {
  const navigation = useNavigation();
  const navigationHandle = () => {
    navigation.navigate('SearchData');
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.mainBgColor}}>
     
    </View>
  );
};

const My_Watchlist = () => {
  const navigation = useNavigation();
  const navigationHandle = () => {
    navigation.navigate('SearchData');
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.mainBgColor}}>
      <TouchableOpacity style={styles.addBox} onPress={navigationHandle} >
        <Icon name="plus" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const Watchlist2 = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.mainBgColor}}>
      <TouchableOpacity style={styles.addBox}>
        <Icon name="plus" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const renderScene = SceneMap({
  first: My_Stocks,
  second: My_Watchlist,
  third: Watchlist2,
});

export default function Tab_View() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'My Stocks'},
    {key: 'second', title: 'My Watchlist'},
    {key: 'third', title: 'Watchlist2'},
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
});
