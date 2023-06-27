import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/SignIn';
import Funds from './Src/ProfilePages/Funds';
import Tabs from './navigation/tabs';
import UserProfile from './Src/ProfilePages/Userprofile';
import Setting from './Src/ProfilePages/Setting';
import BuySrceen from './Src/BuySrceens/BuySrceen';
import SearchData from './Src/SearchData';
import Button1 from './Src/BuySrceens/Button';
import { MainLayout } from './screens';

const Stack = createStackNavigator();
const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerShown: false,
          }
        }
        initialRouteName="SignIn" // Set initial route to SignIn
      >
        {/* <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: 'Sign In'
                    }}
                /> */}
        <Stack.Screen
          name="MainLayout"
          component={Tabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          Options={{
            headerShown: 'true',
          }}
          name="Funds"
          component={Funds}
        />
        <Stack.Screen
          Options={{ title: 'profile', headerShown: 'false' }}
          name="UserProfile"
          component={UserProfile}
        />
        <Stack.Screen
          // Options={{title: 'SearchData', headerShown: 'false'}}
          name="SearchData"
          component={SearchData}
        />
        <Stack.Screen
          Options={{ title: 'Setting', headerShown: 'false' }}
          name="Setting"
          component={Setting}
        />
        <Stack.Screen
          Options={{ title: 'Setting', headerShown: 'false' }}
          name="BuySrceen"
          component={BuySrceen}
        />
        <Stack.Screen
          Options={{ title: 'Button', headerShown: 'false' }}
          name="Button1"
          component={Button1}
        />
        {/* <Stack.Screen
          Options={{ title: 'Button', headerShown: 'false' }}
          name="MainLayout"
          component={MainLayout}
        /> */}



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
