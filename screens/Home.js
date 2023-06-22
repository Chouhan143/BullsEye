import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {CardSlider} from '../components';
import Screen1 from '../Screen1';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../constants';
import {ScrollView} from 'react-native';
const {height, width} = Dimensions.get('window');
const Home = () => {
  return (
    <ScrollView style={{backgroundColor:COLORS.mainBgColor}}>
      <View style={styles.container}>
        <Screen1 />
        <View style={styles.marketBox}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 10,
            }}>
            <Text style={{color: COLORS.textColor}}>Market Today</Text>
            <TouchableOpacity>
              <Text style={{color: COLORS.textColor}}>
                View More <Icon name="right" />{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.Inner_market_Box}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 10,
              }}>
              <View style={{display: 'flex', justifyContent: 'center'}}>
                <Text style={{color: COLORS.textColor}}>Nifty</Text>
                <Text style={{color: 'red', paddingVertical: 5}}>
                  18,745.95
                </Text>
                <Text style={{color: COLORS.textColor}}>-9.50 (-0.05%)</Text>
              </View>
              <View
                style={{
                  width: 1,
                  height: 80,
                  backgroundColor: '#172a46',
                  alignSelf: 'center',
                  marginTop: 10,
                }}></View>
              <View style={{display: 'flex', justifyContent: 'center'}}>
                <Text style={{color: COLORS.textColor}}>Bank Nifty</Text>
                <Text style={{color: 'red', paddingVertical: 5}}>
                  43,745.95
                </Text>
                <Text style={{color: COLORS.textColor}}>-99.50 (-0.025%)</Text>
              </View>
            </View>
          </View>
        </View>
        {/* portfolioBox  start------------------------------------ */}
        <View style={styles.portfolioBox}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              backgroundColor: COLORS.TopBox,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Text style={{color: COLORS.textColor}}>Portfolio</Text>
          </View>

          <View>
            <Text
              style={{
                color: COLORS.textColor,
                padding: 10,
                fontWeight: '700',
                fontSize: 16,
              }}>
              ₹1,00,000
            </Text>
            <Text style={{color:COLORS.textColor, paddingLeft: 10}}>
              <Icon2 name="arrowup" color={'green'} size={15} />
              Overall Profit <Text style={{color: 'green'}}> ₹10,000 </Text>
              (10.25%)
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 10,
            }}>
            <View>
              <Text style={{color: COLORS.textColor, padding: 5}}>
                Investment Amount{' '}
              </Text>
              <Text style={{color: COLORS.textColor, paddingLeft: 10}}>₹80000 </Text>
            </View>
            <View>
              <Text style={{color: COLORS.textColor, padding: 5}}>
                {' '}
                <Icon2 name="arrowup" color={'green'} size={15} />
                Today's Profit{' '}
              </Text>
              <Text style={{color: COLORS.textColor, paddingLeft: 20}}>₹1000 </Text>
            </View>
          </View>
        </View>
        {/* portfolioBox  end ------------------------------------ */}
      </View>
      {/* Event image  start ------------------------------------ */}
      <View style={styles.ImageBox}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            borderRadius: 25,
          }}>
          <Image
            source={require('../assets/Image/gold.png')}
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderColor: COLORS.textColor,
              borderRadius: 25,
            }}
          />
          <Text style={{color: COLORS.textColor, paddingVertical: 10}}>Gold</Text>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}>
          <Image
            source={require('../assets/Image/silver.png')}
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderColor: COLORS.textColor,
              borderRadius: 25,
            }}
          />
          <View
            style={{
              width: 30,
              height: 12,
              backgroundColor: 'red',
              position: 'absolute',
              right: 0,
              top: 0,
              borderRadius: 15,
            }}>
            <Text style={{color: COLORS.textColor, fontSize: 9, alignSelf: 'center'}}>
              New
            </Text>
          </View>
          <Text style={{color: COLORS.textColor, paddingVertical: 10}}>Silver</Text>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            borderRadius: 25,
          }}>
          <Image
            source={require('../assets/Image/copper.png')}
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderColor: COLORS.textColor,
              borderRadius: 25,
            }}
          />
          <Text style={{color: COLORS.textColor, paddingVertical: 10}}>Copper</Text>
        </View>
      </View>
      {/* Event image  end  ------------------------------------ */}
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
    
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  
  },
  marketBox: {
    width: '95%',
    height: height - 540,
    // backgroundColor: '#2E538C',
    backgroundColor:COLORS.bgColor,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',

    marginVertical: 10,
  },
  Inner_market_Box: {
    width: '92%',
    height: height - 600,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#172a46',
    display: 'flex',
    marginVertical: 10,
    alignSelf: 'center',
  },
  portfolioBox: {
    width: '95%',
    height: height - 560,
    backgroundColor:COLORS.bgColor,
    borderRadius: 10,
    display: 'flex',
    marginVertical: 10,
  },
  ImageBox: {
    width: '95%',
    height: height - 600,
    backgroundColor:COLORS.bgColor,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },


});
