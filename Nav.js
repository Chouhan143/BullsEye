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
import LoginScreen from './Src/LoginScreen';
import RegisterScreen from './Src/RegisterScreen';
import { Home } from './screens';

const Stack = createStackNavigator();

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login" // Set initial route to Login
      >
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Register',
          }}
        /> */}
        <Stack.Screen
          name="MainLayout"
          component={Tabs}
          options={{ headerShown: false }}
<<<<<<< HEAD
=======
         
>>>>>>> eec257ad36cbecdba23e2e31a1a7cd87fa90ea88
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Funds"
          component={Funds}
        />
        <Stack.Screen
          options={{ title: 'Profile', headerShown: false }}
          name="UserProfile"
          component={UserProfile}
        />
        <Stack.Screen
          name="SearchData"
          component={SearchData}
        />
        <Stack.Screen
          options={{ title: 'Setting', headerShown: false }}
          name="Setting"
          component={Setting}
        />
        <Stack.Screen
          options={{ title: 'BuyScreen', headerShown: false }}
          name="BuyScreen"
          component={BuySrceen}
        />
         {/* <Stack.Screen
          options={{ title: 'Home', headerShown: false }}
          name="Home"
          component={Home}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
