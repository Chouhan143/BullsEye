import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../constants';
import {useNavigation} from '@react-navigation/native';

const SearchData = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1,backgroundColor:COLORS.mainBgColor}}>
   
      <View style={styles.searchContainer}>
        <TouchableOpacity  onPress={()=> navigation.navigate('Watchlist')}>
        <Icon name="arrowleft" size={25} color="#000"  />
      </TouchableOpacity>

        <View style={styles.searchInputContainer}>
          <Icon2 name="search" size={18} color="#000" />
          <TextInput
            style={{paddingLeft:15,alignSelf:'center'}}
            placeholder="Search"
            placeholderTextColor="#000"
            // onFocus={() => navigation.navigate('Home')}
          />
        </View>
        <View style={{width:35,height:35,borderRadius:17,backgroundColor:COLORS.bgColor,justifyContent:'center',alignItems:'center'}}>
        <Icon3 name="user" size={25} color="#000" />
        </View>
      </View>
      <View style={{marginHorizontal:10,marginVertical:10, width:110,height:30,backgroundColor:COLORS.bgColor,alignItems:'flex-start',justifyContent:'center',borderRadius:5}}>
        <Text style={{color: COLORS.BottomTab,fontWeight:'700',fontSize:14,paddingLeft:5}}>Commodity</Text>
      </View>
    
    </ScrollView>
  );
};

export default SearchData;

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  searchInputContainer: {
    width: 220,
    height: 35,
    backgroundColor: COLORS.bgColor,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'flex-start',
   
    paddingLeft: 10,
  },
});
