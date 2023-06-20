import {View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
export default function Screen1() {
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
           height: height/5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          horizontal
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: width - 30,
                  height: height / 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  disabled={true}
                  style={{
                    width: '90%',
                    height: '90%',
                    backgroundColor: '#365ae1',
                    borderRadius: 10,
                  }}></TouchableOpacity>
              </View>
            );
          }}
        />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.map((item, index) => {
            return (
              <View
                style={{
                  width: currentIndex == index ? 50 : 8,
                  height: currentIndex == index ? 10 : 8,
                  borderRadius: currentIndex == index ? 5 : 4,
                  backgroundColor: currentIndex == index ? '#365ae1' : 'gray',
                  marginLeft: 5,
                }}></View>
            );
          })}
        </View>
      </View>
  
  );
}
