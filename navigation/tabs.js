import React, {useState} from 'react';
import {TouchableOpacity,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabIcon} from '../components';
import {Home, Portfolio, Market, Profile} from '../screens';
import {COLORS, icons} from '../constants';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  setIsTradeModalVisible,
  selectIsTradeModalVisible,
} from '../Src/redux/market/coinSlice';
const Tab = createBottomTabNavigator();
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
const Tabs = () => {
  const navigation = useNavigation();
  const isTradeModalVisible = useSelector(selectIsTradeModalVisible);
  const dispatch = useDispatch();

  const handleTradeButtonPress = () => {
    dispatch(setIsTradeModalVisible(!isTradeModalVisible));
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          backgroundColor: '#2E538C',
          borderTopColor: 'transparent',
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: "Home",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#2E538C", // Set the desired background color here
          },
          // headerLeft: () => (
          //   <TouchableOpacity
          //     style={{ marginLeft: 10 }}
          //     onPress={() => navigation.goBack()}
          //   >
          //     <Text style={{color:'#fff'}}>Back</Text>
          //   </TouchableOpacity>
          // ),
          // headerRight: () => (
          //   <TouchableOpacity
          //     style={{ marginRight: 10 }}
          //     onPress={() => console.log("Watch")}
          //   >
          //     <Text style={{color:'#fff'}}>My lists</Text>
          //   </TouchableOpacity>
          // ),
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.home} label="Home" />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
     
     <Tab.Screen
        name="watchlist"
        component={Market}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#2E538C", // Set the desired background color here
          },
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.watchlist} label="Watchlist" />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />


<Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#2E538C", // Set the desired background color here
          },
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.briefcase}
                  label="Portfolio"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />







      {/* <Tab.Screen
        name="Orders"
        component={Home}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#2E538C", // Set the desired background color here
          },
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={!isTradeModalVisible ? icons.orders : icons.close}
                iconStyle={
                  isTradeModalVisible
                    ? {
                        width: 15,
                        height: 15,
                      }
                    : null
                }
                isTrade={true}
                label="Orders"
              />
            );
          },
          tabBarButton: props => (
            <TabBarCustomButton
              {...props}
              onPress={() => handleTradeButtonPress()} // Dispatch the action
            />
          ),
        }}
      />

 */}

<Tab.Screen
  name="Orders"
  component={Home}
  options={{
    headerShown: true,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#2E538C", // Set the desired background color here
    },
    tabBarIcon: ({ focused }) => {
      if (!isTradeModalVisible) {
        return (
          <TabIcon
            focused={focused}
            icon={icons.orders}
            label="Orders"
          />
        );
      }
    },
  }}
  listeners={{
    tabPress: (e) => {
      if (isTradeModalVisible) {
        e.preventDefault();
      }
    },
  }}
/>



    
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#2E538C", // Set the desired background color here
          },
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.profile}
                  label="Profile"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
