import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Equity from './Equity';
import Commodity from './Commodity';

const Tab = createMaterialTopTabNavigator();

const Funds = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Equity" component={Equity} />
      <Tab.Screen name="Commodity" component={Commodity} />
    </Tab.Navigator>
  )
}

export default Funds