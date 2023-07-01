import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Overnight from './Overnight';
import Intraday from './Intraday';

const Tab = createMaterialTopTabNavigator(); 

const BuySrceen = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Overnight" component={Overnight} />  */}
      <Tab.Screen name="Intraday" component={Intraday} />
    </Tab.Navigator>
  )
}

export default BuySrceen

const styles = StyleSheet.create({

})