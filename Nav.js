import React, { useState, useRef, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, CommonActions } from '@react-navigation/native';

import SignIn from './screens/SignIn';
import Funds from './Src/ProfilePages/Funds';
import Tabs from './navigation/tabs';
import UserProfile from './Src/ProfilePages/Userprofile';
import Setting from './Src/ProfilePages/Setting';
import BuySrceen from './Src/BuySrceens/BuySrceen';
import SearchData from './Src/SearchData';
import LoginScreen from './Src/LoginScreen';
import RegisterScreen from './Src/RegisterScreen';
import SellScreen from './Src/BuySrceens/SellScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Email2 from './Src/BuySrceens/Email2';
import Mobile from './Src/BuySrceens/Mobile';
import Mobile2 from './Src/BuySrceens/Mobile2';
import Document from './Src/BuySrceens/Document';
import EmailVerification from './Src/BuySrceens/EmailVarification';
import ForgotPassword from './Src/ForgotPassword';
import ForgetPasswordOtp from './Src/ForgetPasswordOtp';
import ForgotPasswordSet from './Src/ForgotPasswordSet';
import ForgotPasswordDone from './Src/ForgotPasswordDone';
import { COLORS } from './constants';
import { BackHandler, Platform } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const Stack = createStackNavigator();

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigationRef = useRef(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  };

  // Handle Android hardware back button press
  const handleBackPress = () => {
    if (!isLoggedIn) {
      BackHandler.exitApp();
      return true;
    } else if (isLoggedIn && navigationRef.current) {
      const currentRoute = navigationRef.current.getCurrentRoute();
      // Check if the current screen is "MainLayout", prevent going back if logged in
      if (currentRoute?.name === "MainLayout") {
        return true;
      }
    }

    return false;
  };


  // Set the initial route conditionally based on isLoggedIn state
  useEffect(() => {
    const unsubscribe = navigationRef.current?.addListener('state', () => {
      // Check if the user is logged in, if not, close the app when the back button is pressed on Android
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      }
    });

    return () => {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }
      unsubscribe?.();
    };
  }, [isLoggedIn]);


  useEffect(() => {
    // Update the initial route based on the isLoggedIn state
    const initialRouteName = isLoggedIn ? 'MainLayout' : 'Login';
    navigationRef.current?.resetRoot({
      index: 0,
      routes: [{ name: initialRouteName }],
    });
  }, [isLoggedIn]);



  useEffect(() => {
    const checkLoggedInStatus = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');

        // If the accessToken exists, the user is logged in
        if (accessToken) {
          setIsLoggedIn(true);
          navigation.navigate('MainLayout')
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        // Handle error if token retrieval fails
        console.log('Error retrieving token:', error);
        setIsLoggedIn(false);
      }
    };

    // Add a 1-second delay using setTimeout
    const timer = setTimeout(() => {
      checkLoggedInStatus();
    }, 1000);

    // Clear the timer on unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);





  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
        }}
        initialRouteName={isLoggedIn ? "MainLayout" : "Login"} // Set initial route to MainLayout if logged in, otherwise to Login
      >
        <Stack.Screen
          name="Login"
          component={() => <LoginScreen handleLogin={handleLogin} />}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Register',
            headerStyle: {
              width: responsiveWidth(100),
              height: responsiveHeight(7),
              backgroundColor: COLORS.bgColor,

            },
            headerTitleStyle: {
              fontSize: responsiveFontSize(2.5), // Set the desired font size
            },
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerStyle: {
              width: responsiveWidth(100),
              height: responsiveHeight(7),
              backgroundColor: COLORS.bgColor,

            },
            headerTitleStyle: {
              fontSize: responsiveFontSize(2.5), // Set the desired font size
            },
          }}
        />
        <Stack.Screen
          name="ForgetPasswordOtp"
          component={ForgetPasswordOtp}
          options={{
            headerStyle: {
              width: responsiveWidth(100),
              height: responsiveHeight(7),
              backgroundColor: COLORS.bgColor,

            },
            headerTitleStyle: {
              fontSize: responsiveFontSize(2.5), // Set the desired font size
            },
          }}
        />
        <Stack.Screen
          name="ForgotPasswordSet"
          component={ForgotPasswordSet}
          options={{
            headerStyle: {
              width: responsiveWidth(100),
              height: responsiveHeight(7),
              backgroundColor: COLORS.bgColor,

            },
            headerTitleStyle: {
              fontSize: responsiveFontSize(2.5), // Set the desired font size
            },
          }}
        />
        <Stack.Screen
          name="ForgotPasswordDone"
          component={ForgotPasswordDone}
          options={{
            headerShown: false,
            headerStyle: {
              width: responsiveWidth(100),
              height: responsiveHeight(7),
              backgroundColor: COLORS.bgColor,

            },

            headerTitleStyle: {
              fontSize: responsiveFontSize(2.5), // Set the desired font size
            },
          }}
        />




        <Stack.Screen
          name="MainLayout"
          component={Tabs}
          options={{ headerShown: false }}
          initialParams={{ handleLogout }}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: COLORS.bgColor },
          }}
          name="Funds"
          component={Funds}
        />
        <Stack.Screen
          options={{
            title: 'Profile',
            headerStyle: {
              width: responsiveWidth(100),
              height: responsiveHeight(7),
              backgroundColor: COLORS.bgColor,

            },
            headerTitleStyle: {
              fontSize: responsiveFontSize(2.5), // Set the desired font size
            },
          }}
          name="UserProfile"
          component={UserProfile}
        />
        <Stack.Screen
          name="SearchData"
          component={SearchData}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'Help',
            headerStyle: {
              width: responsiveWidth(100),
              height: responsiveHeight(7),
              backgroundColor: COLORS.bgColor,

            },
            headerTitleStyle: {
              fontSize: responsiveFontSize(2.5), // Set the desired font size
            },
          }}
        />
        <Stack.Screen
          options={{ title: 'BuyScreen', headerShown: false }}
          name="BuyScreen"
          component={BuySrceen}
        />

        <Stack.Screen
          options={{ title: 'SellScreen', headerShown: false }}
          name="SellScreen"
          component={SellScreen}
        />


        <Stack.Screen
          options={{ title: 'EmailVarification', headerShown: false }}
          name="EmailVerification"
          component={EmailVerification}

        />
        <Stack.Screen
          options={{ title: 'Email2', headerShown: false }}
          name="Email2"
          component={Email2}
        />
        <Stack.Screen
          options={{ title: 'Mobile', headerShown: false }}
          name="Mobile"
          component={Mobile}
        />
        <Stack.Screen
          options={{ title: 'Mobile2', headerShown: false }}
          name="Mobile2"
          component={Mobile2}
        />
        <Stack.Screen
          options={{ title: 'Document', headerShown: false }}
          name="Document"
          component={Document}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
