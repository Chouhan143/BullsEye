import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/AntDesign';

import {COLORS} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCoinData, addToWatchlist} from '../Src/redux/market/coinSlice';

const SearchData = () => {

  // const dispatch = useDispatch();
  const addedItems = useSelector(state =>state);
  // console.log(addedItems);
  const addItem = (item) => {
    dispatch(addCardItem(item))
  }
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const searchRef = useRef();
  const coinsData = useSelector(state => state.coin.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoinData());
  }, []);

  
  

  const handleAddToWatchlist = (item) => {
    dispatch(addToWatchlist(item));
    setTimeout(() => {
      navigation.navigate('MainLayout');
    }, 3000); // You can adjust the delay (in milliseconds) if needed
  };
  

  const navigation = useNavigation();
  const [filterData, setFilterData] = useState([]);
  const onSearch = text => {
    if (text == '') {
      setFilterData(coinsData);
    } else {
      let tempList = coinsData.filter(item => {
        return item.trade_name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setFilterData(tempList);
    }
  };
  


 

  const renderItem = ({item}) => {

    return (
      <TouchableOpacity
        style={{
          width: '100%',
          height: 60,
          backgroundColor: COLORS.bgColor,
          marginVertical: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
        >
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: COLORS.BottomTab,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                marginRight: 10,
              }}>
              <Text style={{ color: COLORS.white }}>
                {item.trade_name.charAt(0)}
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.textColor,
                fontSize: 12,
                fontWeight: '400',
              }}>
              {item.trade_name}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 5,
            }}>
            <Text
              style={{
                paddingRight: 40,
                color: COLORS.textColor,
                fontSize: 12,
                fontWeight: '400',
              }}>
              {item.price}
            </Text>
            <TouchableOpacity>
              <Icon5 name="shopping-bag" size={20} color="#1B1A1A" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{paddingLeft: 10}}
              onPress={() => handleAddToWatchlist(item)}>
              <Icon4 name="favorite" size={20} color="#1B1A1A" />
            </TouchableOpacity>
          </View>
        </View>
      
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.mainBgColor }}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Watchlist')}>
          <Icon name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>

        <View style={styles.searchInputContainer}>
          <Icon2 name="search" size={18} color="#000" />
          <TextInput
            ref={searchRef}
            style={{
              paddingLeft: 15,
              paddingRight: 30,
              width: '100%',
              alignSelf: 'center',
            }}
            placeholder="Search"
            placeholderTextColor="#000"
            onChangeText={txt => {
              onSearch(txt);
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: 17,
            backgroundColor: COLORS.bgColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={openModal}>
          <Icon3 name="filter" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          width: 110,
          height: 30,
          backgroundColor: COLORS.bgColor,
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: COLORS.BottomTab,
            fontWeight: '700',
            fontSize: 14,
            paddingLeft: 5,
          }}>
          Commodity
        </Text>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.topMiddle}>
          <View>
            <Text style={styles.topText1}>Stock Name</Text>
          </View>
          <View style={styles.topLast}>
            <Text style={[styles.topText1, { paddingRight: 20 }]}>Price</Text>
            <Text style={styles.topText1}>Change / Vol</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

      {/* model---------------- */}

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.modalInner}
                onPress={() => {
                  let tempList = filterData.sort((a, b) =>
                    a.trade_name > b.trade_name ? 1 : -1,
                  );
                  setFilterData(tempList);
                }}>
                <Text style={styles.modalText}>Sort By Trade_name</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalInner}>
                <Text style={styles.modalText}>Low to High Price</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalInner}>
                <Text style={styles.modalText}>High to Low Price</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.closIcon} onPress={closeModal}>
                <Icon6 name="closesquare" size={25} color="#1B1A1A" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* modal end -------------------------- */}
    </View>
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
    alignSelf: 'flex-start',
    paddingLeft: 10,
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
  topText1: {
    color: COLORS.textColor,
    fontSize: 12,
    fontWeight: '500',
  },
  topText: {
    color: COLORS.textColor,
    fontSize: 12,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.bgColor,
    padding: 20,
    borderRadius: 5,
    width: '80%',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: COLORS.textColor,
  },
  closeButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
  },
  modalInner: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  closIcon: {
    display: 'flex',
    position: 'absolute',
    top: -60,
    right: -45,
  },
});
